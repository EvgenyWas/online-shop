import { Component } from 'react'
import { client } from '../../graphql/client'
import { QUERY_PRODUCT } from '../../graphql/queries'
import { injectCurrentCurrency } from '../../hocs/injectCurrentCurrency'
import { TAttribute } from '../../types/types'
import { getCurrentPrice } from '../../utils/utils'
import AttributesBar from '../UI/AttributesBar/AttributesBar'
import { TType } from '../UI/AttributesBar/types'
import PrimaryButton from '../UI/Buttons/PrimaryButton'
import ProductTitle from '../UI/Titles/ProductTitle'
import { StyledDescription, StyledPrice, StyledPriceContainer, StyledPriceName, StyledProductBar } from './styles'
import { TProductBarState } from './types'

// TProductBarProps
class ProductBar extends Component<any, TProductBarState> {
  constructor(props: any) {
    super(props)
    this.state = {
      product: {},
      chosenSwatch: null,
      chosenText: null
    }
    this.handleChoose = this.handleChoose.bind(this)
  }

  componentDidMount = async () => {
    const response = await client.query({
      query: QUERY_PRODUCT,
      variables: ({id: this.props.id})
    });
    this.setState({
      product: response.data.product
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

  render() {
    const { product } = this.state;
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
          chosenSwatch={this.state.chosenSwatch}
          chosenText={this.state.chosenText}
        />
        <StyledPriceContainer>
          <StyledPriceName>
            PRICE:
          </StyledPriceName>
          <StyledPrice>
            {`${currentCurrency}${getCurrentPrice(prices, currentCurrency)?.amount as number}`}
          </StyledPrice>
        </StyledPriceContainer>
        <PrimaryButton>
          add to cart
        </PrimaryButton>
        <StyledDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </StyledProductBar>
    )
  }
}

export default injectCurrentCurrency(ProductBar);