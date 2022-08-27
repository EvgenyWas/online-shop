import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { CartOverlayContext, TCartOverlayContext } from "../../context/CartOverlayContext";
import { cartVar, currentProductVar } from "../../graphql/cache";
import { injectCurrentCurrency } from "../../hocs/injectCurrentCurrency";
import { TManageAmountOperations } from "../../types/types";
import
  {
    addProductToCart,
    decreaseProductAmount,
    getCurrentPrice,
    updateLocalStorageCart
  } from "../../utils/utils";
import { TAttributes } from "../UI/AttributesBar/types";
import Line from "../UI/Molecules/Line";
import CartGallery from "./CartGallery";
import ManageAmount from "./ManageAmount";
import
  {
    StyledAttributesBar,
    StyledBox,
    StyledCartItem,
    StyledCartPrice,
    StyledTitle
  } from "./styles";
import { TCartItemProps } from "./types";

class CartItem extends Component<TCartItemProps> {
  constructor(props: TCartItemProps) {
    super(props);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
  }

  handleChangeAmount = (operation: TManageAmountOperations) => {
    let { amount, order } = cartVar();
    const { product } = this.props;

    if (operation === "decrease") {
      cartVar({
        ...cartVar(),
        amount: (amount -= 1),
        order: decreaseProductAmount(order, product),
      });
    } else {
      cartVar({
        ...cartVar(),
        amount: (amount += 1),
        order: addProductToCart(order, product),
      });
    };

    updateLocalStorageCart(cartVar());
  };

  handleClick = (id: string) => {
    const { handleCloseCartOverlay } = this.context as TCartOverlayContext;
    handleCloseCartOverlay();
    currentProductVar(id);
  };

  render() {
    const { product, swatch, text, amount } = this.props.product;
    const { brand, name, prices, attributes, gallery, id } = product;
    const { currentCurrency, className } = this.props;
    const price = `${currentCurrency}${
      getCurrentPrice(prices, currentCurrency)?.amount.toFixed(2)
    }`;

    return (
      <Fragment>
        <StyledCartItem className={className}>
          <StyledBox>
            <Link
              to={`/products/${id}`}
              key={id}
              onClick={() => this.handleClick(id)}
            >
              <StyledTitle brand={brand} name={name} />
            </Link>
            <StyledCartPrice>{price}</StyledCartPrice>
            <StyledAttributesBar
              attributes={attributes as TAttributes}
              handleChoose={() => {}}
              chosenSwatch={swatch}
              chosenText={text}
              className={className}
              inStock={true}
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

CartItem.contextType = CartOverlayContext;

export default injectCurrentCurrency(CartItem);
