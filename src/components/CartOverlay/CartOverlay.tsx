import { Component } from 'react'
import { injectCartReactiveVars } from '../../hocs/injectCartReactiveVars'
import OutsideClick from '../../hocs/OutsideClick';
import { TProduct } from '../../types/types';
import CartOverlayTitle from '../UI/Titles/CartOverlayTitle'
import CartOverlayTotal from './CartOverlayTotal';
import { StyledCartOverlay, StyledCartOverlayItem, StyledOutsideClick } from './styles'

class CartOverlay extends Component<any> {
  render() {
    const { currentCurrency, cart } = this.props.data;

    return (
      <StyledOutsideClick handler={this.props.onClick} >
        <StyledCartOverlay>
          <CartOverlayTitle 
            amount={cart.amount}
          />
          {cart.order.map((product: TProduct, index: number) => {
            return <StyledCartOverlayItem
              key={index}
              product={product}
            />
          })}
          <CartOverlayTotal
            currentCurrency={currentCurrency}
            cart={cart}
          />
        </StyledCartOverlay>
      </StyledOutsideClick>
    )
  }
}

export default injectCartReactiveVars(CartOverlay)