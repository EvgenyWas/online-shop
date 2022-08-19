import { Component } from "react";
import iconCart from "../../../assets/icons/nav/icon-cart.svg";
import {
  CartOverlayContext,
  TCartOverlayContext,
} from "../../../context/CartOverlayContext";
import CartOverlay from "../../CartOverlay/CartOverlay";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import AmountCart from "./AmountCart";
import { StyledActions, StyledCart, StyledCartContainer } from "./styles";

class Actions extends Component {
  render() {
    const {
      isCartOverlayOpen,
      handleChangeStateCartOverlay,
      handleCloseCartOverlay,
    } = this.context as TCartOverlayContext;

    return (
      <StyledActions>
        <CurrencySwitcher
          data={{
            data: {
              __typename: undefined,
              currencies: undefined,
            },
            currentCurrency: "",
          }}
        />
        <StyledCartContainer onClick={handleChangeStateCartOverlay}>
          <StyledCart src={iconCart} alt="Cart" />
          <AmountCart />
        </StyledCartContainer>
        {isCartOverlayOpen && (
          <CartOverlay
            onClick={handleCloseCartOverlay}
            data={{
              cart: {
                amount: 0,
                order: [],
              },
              currentCurrency: "",
            }}
          />
        )}
      </StyledActions>
    );
  }
}

Actions.contextType = CartOverlayContext;

export default Actions;
