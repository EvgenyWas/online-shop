import { Component } from "react";
import { Navigate } from "react-router-dom";
import { cartVar } from "../../graphql/cache";
import { injectCurrentCurrency } from "../../hocs/injectCurrentCurrency";
import { TAttribute } from "../../types/types";
import {
  addProductToCart,
  findAttribute,
  getCurrentPrice,
  getProductPDP,
  updateLocalStorageCart,
} from "../../utils/utils";
import AttributesBar from "../UI/AttributesBar/AttributesBar";
import { TType } from "../UI/AttributesBar/types";
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
      product: {},
      chosenSwatch: null,
      chosenText: null,
      isAddedToCart: false,
      isReplaceToCart: false,
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount = async () => {
    const product = await getProductPDP(this.props.id);
    const swatch = findAttribute(product, "swatch");
    const text = findAttribute(product, "text");

    this.setState({
      product: product,
      chosenSwatch: swatch?.items![0] as TAttribute,
      chosenText: text?.items![0] as TAttribute,
    });
  };

  handleChoose(type: TType, attribute: TAttribute) {
    if (type === "swatch") {
      this.setState({
        chosenSwatch: { ...attribute },
      });
    } else if (type === "text") {
      this.setState({
        chosenText: { ...attribute },
      });
    }
  }

  handleAddToCart() {
    const { product, isAddedToCart, chosenSwatch, chosenText } = this.state;

    if (!product.inStock) {
      return;
    }

    if (!isAddedToCart) {
      this.setState({
        isAddedToCart: true,
      });

      const newProduct = {
        product: product,
        swatch: chosenSwatch,
        text: chosenText,
        amount: 1,
      };

      cartVar({
        ...cartVar(),
        amount: (cartVar().amount += 1),
        order: addProductToCart(cartVar().order, newProduct),
      });

      updateLocalStorageCart(cartVar());
    } else {
      this.setState({
        isReplaceToCart: true,
      });
    }
  }

  render() {
    const {
      product,
      chosenSwatch,
      chosenText,
      isAddedToCart,
      isReplaceToCart,
    } = this.state;
    const { brand, name, attributes, prices, description } = product;
    const currentCurrency = this.props.currentCurrency;

    return (
      <StyledProductBar>
        <ProductTitle brand={brand} name={name} />
        <AttributesBar
          attributes={attributes}
          handleChoose={this.handleChoose}
          chosenSwatch={chosenSwatch}
          chosenText={chosenText}
        />
        <StyledPriceContainer>
          <StyledPriceName>PRICE:</StyledPriceName>
          <StyledPrice>
            {`${currentCurrency}${
              getCurrentPrice(prices, currentCurrency)?.amount
            }`}
          </StyledPrice>
        </StyledPriceContainer>
        <ProductButton
          onClick={this.handleAddToCart}
          isAddedToCart={isAddedToCart}
          inStock={product.inStock}
        >
          {isAddedToCart ? "go to cart" : "add to cart"}
        </ProductButton>
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
        {isReplaceToCart && <Navigate replace to="/cart" />}
      </StyledProductBar>
    );
  }
}

export default injectCurrentCurrency(ProductBar);
