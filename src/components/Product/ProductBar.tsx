import { Component } from "react";
import { cartVar } from "../../graphql/cache";
import { injectCurrentCurrency } from "../../hocs/injectCurrentCurrency";
import { AttributeSet, ProductPdpFragment } from "../../types/generated";
import { TAttribute } from "../../types/types";
import {
  addProductToCart,
  formatAttributes,
  getCurrentPrice,
  updateLocalStorageCart,
} from "../../utils/utils";
import AttributesBar from "../UI/AttributesBar/AttributesBar";
import ProductTitle from "../UI/Titles/ProductTitle";
import {
  ProductButton,
  StyledDescription,
  StyledPrice,
  StyledPriceContainer,
  StyledPriceName,
  StyledProductBar,
} from "./styles";
import { TProductBarProps, TProductBarState } from "./types";

class ProductBar extends Component<TProductBarProps, TProductBarState> {
  constructor(props: TProductBarProps) {
    super(props);
    this.state = {
      chosenAttributes: [],
      productId: "",
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    const { attributes, id } = this.props.product as ProductPdpFragment;
    const formattedAttributes = formatAttributes(attributes as AttributeSet[]);

    this.setState({
      chosenAttributes: formattedAttributes,
      productId: id,
    });
  }

  handleChoose(attributeId: string, attribute: TAttribute, name: string) {
    const { inStock, attributes, id } = this.props
      .product as ProductPdpFragment;
    const { chosenAttributes, productId } = this.state;
    if (!inStock) {
      return;
    }

    let formattedAttributes =
      id === productId && chosenAttributes
        ? chosenAttributes
        : formatAttributes(attributes as AttributeSet[]);
    const newChosenAttributes = formattedAttributes?.map((item) => {
      if (attribute.id !== attributeId && item.name === name) {
        item.chosenAttribute = attribute;
        return item;
      }

      return item;
    });

    this.setState({
      chosenAttributes: newChosenAttributes,
    });
  }

  handleAddToCart() {
    const { chosenAttributes } = this.state;
    const product = this.props.product as ProductPdpFragment;

    if (!product.inStock) {
      return;
    }

    const newProduct = {
      product: product,
      chosenAttributes: chosenAttributes,
      amount: 1,
    };

    cartVar({
      amount: (cartVar().amount += 1),
      order: addProductToCart(cartVar().order, newProduct),
    });
    updateLocalStorageCart(cartVar());
  }

  render() {
    const { chosenAttributes } = this.state;
    const { brand, name, attributes, prices, description, inStock, id } = this
      .props.product as ProductPdpFragment;
    const currentCurrency = this.props.currentCurrency;
    const price =
      currentCurrency +
      getCurrentPrice(prices, currentCurrency)?.amount.toFixed(2);

    return (
      <StyledProductBar key={id}>
        <ProductTitle brand={brand} name={name} />
        <AttributesBar
          attributes={attributes as any}
          handleChoose={this.handleChoose}
          chosenAttributes={chosenAttributes}
          inStock={inStock as boolean}
        />
        <StyledPriceContainer>
          <StyledPriceName>PRICE:</StyledPriceName>
          <StyledPrice>{price}</StyledPrice>
        </StyledPriceContainer>
        <ProductButton
          onClick={this.handleAddToCart}
          inStock={inStock as boolean}
        >
          add to cart
        </ProductButton>
        <StyledDescription content={description} />
      </StyledProductBar>
    );
  }
}

export default injectCurrentCurrency(ProductBar);
