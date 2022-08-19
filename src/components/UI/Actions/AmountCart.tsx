import { Component } from "react";
import { localStorageKeys } from "../../../config";
import { cartVar } from "../../../graphql/cache";
import { injectCartReactiveVars } from "../../../hocs/injectCartReactiveVars";
import { getLocalStorageValue } from "../../../utils/utils";
import { StyledAmountCart } from "./styles";

class AmountCart extends Component<any> {
  componentDidMount() {
    const { amount } = this.props.data.cart;
    const value = getLocalStorageValue(localStorageKeys.user);

    if (!amount && value) {
      cartVar(value.cart);
    }
  }

  render() {
    const { amount } = this.props.data.cart;
    const localStorageAmount = getLocalStorageValue(localStorageKeys.user)?.cart
      ?.amount;
    const definedAmount = amount || localStorageAmount || 0;

    return (
      <StyledAmountCart>
        <p>{definedAmount}</p>
      </StyledAmountCart>
    );
  }
}

export default injectCartReactiveVars(AmountCart);
