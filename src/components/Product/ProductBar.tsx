import { Component } from "react";
import { cartVar } from "../../graphql/cache";
import { injectCurrentCurrency } from "../../hocs/injectCurrentCurrency";
import { Product, ProductPdpFragment } from "../../types/generated";
import { TAttribute } from "../../types/types";
import
  {
    addProductToCart,
    findAttribute,
    getCurrentPrice, updateLocalStorageCart
  } from "../../utils/utils";
import AttributesBar from "../UI/AttributesBar/AttributesBar";
import { TType } from "../UI/AttributesBar/types";
import ProductTitle from "../UI/Titles/ProductTitle";
import
  {
    ProductButton,
    StyledDescription,
    StyledPrice,
    StyledPriceContainer,
    StyledPriceName,
    StyledProductBar
  } from "./styles";
import { TProductBarProps, TProductBarState } from "./types";

class ProductBar extends Component<TProductBarProps, TProductBarState> {
  constructor(props: TProductBarProps) {
    super(props);
    this.state = {
      chosenSwatch: null,
      chosenText: null,
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    const product = this.props.product as Product;
    const swatch = findAttribute(product, "swatch");
    const text = findAttribute(product, "text");

    this.setState({
      chosenSwatch: swatch?.items![0] as TAttribute,
      chosenText: text?.items![0] as TAttribute,
    });
  };

  handleChoose(type: TType, attribute: TAttribute) {
    const { inStock } = this.props.product as Product;

    if (!inStock) {
      return;
    };

    if (type === "swatch") {
      this.setState({
        chosenSwatch: { ...attribute },
      });
    } else {
      this.setState({
        chosenText: { ...attribute },
      });
    }
  }

  handleAddToCart() {
    const { chosenSwatch, chosenText } = this.state;
    const product = this.props.product as Product;

    if (!product.inStock) {
      return;
    };

    const newProduct = {
      product: product,
      swatch: chosenSwatch,
      text: chosenText,
      amount: 1,
    };

    cartVar({
      amount: (cartVar().amount += 1),
      order: addProductToCart(cartVar().order, newProduct),
    });
    updateLocalStorageCart(cartVar());
  }

  render() {
    const {
      chosenSwatch,
      chosenText,
    } = this.state;
    const { brand, name, attributes, prices, description, inStock } = this.props.product as ProductPdpFragment;
    const currentCurrency = this.props.currentCurrency;
    const price =
      currentCurrency + getCurrentPrice(prices, currentCurrency)?.amount.toFixed(2);

    return (
      <StyledProductBar>
        <ProductTitle brand={brand} name={name} />
        <AttributesBar
          attributes={attributes as any}
          handleChoose={this.handleChoose}
          chosenSwatch={chosenSwatch}
          chosenText={chosenText}
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
