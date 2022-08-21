import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { cartVar, currentProductVar } from "../../graphql/cache";
import { injectCurrentCurrency } from "../../hocs/injectCurrentCurrency";
import { TAttribute, TManageAmountOperations } from "../../types/types";
import {
  addProductToCart,
  decreaseProductAmount,
  findSameProductInCart,
  getCurrentPrice,
  updateLocalStorageCart,
} from "../../utils/utils";
import { TAttributes, TType } from "../UI/AttributesBar/types";
import Line from "../UI/Molecules/Line";
import CartGallery from "./CartGallery";
import ManageAmount from "./ManageAmount";
import {
  StyledAttributesBar,
  StyledBox,
  StyledCartItem,
  StyledCartPrice,
  StyledTitle,
} from "./styles";
import { TCartItemProps } from "./types";

class CartItem extends Component<TCartItemProps> {
  constructor(props: TCartItemProps) {
    super(props);
    this.handleChoose = this.handleChoose.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
  }

  handleChoose(type: TType, attribute: TAttribute) {
    const cart = cartVar().order;
    const product = this.props.product;
    const productNumber = findSameProductInCart(cart, product) as number;

    type === "swatch"
      ? (cart[productNumber].swatch = attribute)
      : (cart[productNumber].text = attribute);

    const updatedProductNumber = findSameProductInCart(
      cart,
      cart[productNumber],
      productNumber
    ) as number;

    if (updatedProductNumber || updatedProductNumber === 0) {
      cart[productNumber].amount += cart[updatedProductNumber].amount;
      const filteredCart = cart.filter(
        (product, index) => index !== updatedProductNumber
      );

      cartVar({
        ...cartVar(),
        order: filteredCart,
      });
      updateLocalStorageCart(cartVar());
    } else {
      cartVar({
        ...cartVar(),
        order: cart,
      });
      updateLocalStorageCart(cartVar());
    }
  }

  handleChangeAmount = (operation: TManageAmountOperations) => {
    const cart = cartVar();
    const product = this.props.product;

    if (operation === "decrease") {
      cartVar({
        ...cartVar(),
        amount: (cart.amount -= 1),
        order: decreaseProductAmount(cart.order, product),
      });
      updateLocalStorageCart(cartVar());
    } else {
      cartVar({
        ...cartVar(),
        amount: (cart.amount += 1),
        order: addProductToCart(cart.order, product),
      });
      updateLocalStorageCart(cartVar());
    }
  };

  handleClick = (id: string) => currentProductVar(id);

  render() {
    const { product, swatch, text, amount } = this.props.product;
    const { brand, name, prices, attributes, gallery, id } = product;
    const currentCurrency = this.props.currentCurrency;

    return (
      <Fragment>
        <StyledCartItem className={this.props.className}>
          <StyledBox>
            <Link to={`/products/${id}`} key={id} onClick={() => this.handleClick(id)}>
              <StyledTitle brand={brand} name={name} />
            </Link>
            <StyledCartPrice>
              {`${currentCurrency}${
                getCurrentPrice(prices, currentCurrency)?.amount as number
              }`}
            </StyledCartPrice>
            <StyledAttributesBar
              attributes={attributes as TAttributes}
              handleChoose={this.handleChoose}
              chosenSwatch={swatch}
              chosenText={text}
              className={this.props.className}
            />
          </StyledBox>
          <ManageAmount
            amount={amount}
            handleChangeAmount={this.handleChangeAmount}
          />
          <CartGallery
            key={product.id}
            gallery={gallery as string[]}
            name={name}
          />
        </StyledCartItem>
        <Line />
      </Fragment>
    );
  }
}

export default injectCurrentCurrency(CartItem);
