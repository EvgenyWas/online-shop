import { Component } from "react";
import { injectCartReactiveVars } from "../../hocs/injectCartReactiveVars";
import { InjectedCartProps } from "../../hocs/types";
import { TProduct } from "../../types/types";
import CartEmpty from "../UI/Titles/CartEmpty";
import CartTitle from "../UI/Titles/CartTitle";
import CartItem from "./CartItem";
import CartResult from "./CartResult";

class Cart extends Component<InjectedCartProps> {
  render() {
    const { currentCurrency, cart } = this.props.data;
    const isCartEmpty = !cart.order.length;

    return (
      <div className="container">
        <CartTitle />
        {isCartEmpty ? (
          <CartEmpty title="the cart is empty" />
        ) : (
          cart.order.map((product: TProduct, index: number) => {
            return <CartItem key={index} product={product} />;
          })
        )}
        <CartResult currentCurrency={currentCurrency} cart={cart} />
      </div>
    );
  }
}

export default injectCartReactiveVars(Cart);
