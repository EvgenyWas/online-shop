import { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { cartVar } from '../../graphql/cache'
import { client } from '../../graphql/client'
import { QUERY_PRODUCT } from '../../graphql/queries'
import { injectCurrentCurrency } from '../../hocs/injectCurrentCurrency'
import { TAttribute } from '../../types/types'
import { addProductToCart, findAttribute, getCurrentPrice, updateLocalStorageCart } from '../../utils/utils'
import AttributesBar from '../UI/AttributesBar/AttributesBar'
import { TType } from '../UI/AttributesBar/types'
import ProductTitle from '../UI/Titles/ProductTitle'
import { ProductButton, StyledDescription, StyledPrice, StyledPriceContainer, StyledPriceName, StyledProductBar } from './styles'
import { TProductBarState } from './types'

// TProductBarProps
class ProductBar extends Component<any, TProductBarState> {
  constructor(props: any) {
    super(props)
    this.state = {
      product: {},
      chosenSwatch: null,
      chosenText: null,
      isAddedToCart: false,
      isReplaceToCart: false,
    }
    this.handleChoose = this.handleChoose.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  componentDidMount = async () => {
    const response = await client.query({
      query: QUERY_PRODUCT,
      variables: ({id: this.props.id})
    });
    const product = response.data.product;
    const swatch = findAttribute(product, 'swatch');
    const text = findAttribute(product, 'text');

    this.setState({
      product: response.data.product,
      chosenSwatch: swatch?.items[0],
      chosenText: text?.items[0]
    })
  }

  handleChoose(type: TType, attribute: TAttribute) {
    if(type === 'swatch') {
      this.setState({
        chosenSwatch: {...attribute},
      })
    } else if(type === 'text') {
      this.setState({
        chosenText: {...attribute},
      })    
    }
  }

  handleAddToCart() {
    if (!this.state.product.inStock) {
      return
    }

    if(!this.state.isAddedToCart) {
      this.setState({
        isAddedToCart: true
      });

      const product = {
        product: this.state.product,
        swatch: this.state.chosenSwatch,
        text: this.state.chosenText,
        amount: 1
      };

      cartVar({
        ...cartVar(),
        amount: cartVar().amount += 1,
        order: addProductToCart(cartVar().order, product)
      });

      updateLocalStorageCart(cartVar());
    } else {
      this.setState({
        isReplaceToCart: true
      })
    }
  }

  render() {
    const { product, chosenSwatch, chosenText, isAddedToCart, isReplaceToCart } = this.state;
    const { brand, name, attributes, prices, description } = product;
    const currentCurrency = this.props.currentCurrency;

    return (
      <StyledProductBar>
        <ProductTitle
          brand={brand}
          name={name}
        />
        <AttributesBar 
          attributes={attributes}
          handleChoose={this.handleChoose}
          chosenSwatch={chosenSwatch}
          chosenText={chosenText}
        />
        <StyledPriceContainer>
          <StyledPriceName>
            PRICE:
          </StyledPriceName>
          <StyledPrice>
            {`${currentCurrency}${getCurrentPrice(prices, currentCurrency)?.amount}`}
          </StyledPrice>
        </StyledPriceContainer>
        <ProductButton 
          onClick={this.handleAddToCart}
          isAddedToCart={isAddedToCart}
          inStock={product.inStock}
        >
          {isAddedToCart ?
          'go to cart' :
          'add to cart'
          }
        </ProductButton>
        <StyledDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {isReplaceToCart && <Navigate replace to='/cart'/>}
      </StyledProductBar>
    )
  }
}

export default injectCurrentCurrency(ProductBar);