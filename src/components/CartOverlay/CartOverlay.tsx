import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { CartOverlayContext, TCartOverlayContext } from '../../context/CartOverlayContext';
import { injectCartReactiveVars } from '../../hocs/injectCartReactiveVars';
import { InjectedCartProps } from '../../hocs/types';
import { TProduct } from '../../types/types';
import CartOverlayTitle from '../UI/Titles/CartOverlayTitle';
import CartOverlayTotal from './CartOverlayTotal';
import { StyledButtons, StyledCartEmpty, StyledCartOverlay, StyledCartOverlayItem, StyledCheckOutButton, StyledItems, StyledOutsideClick, StyledViewBagButton } from './styles';

type Props = InjectedCartProps & {
  onClick: () => void
}

type State = {
  isRedirectToCart: boolean
}

class CartOverlay extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isRedirectToCart: false
    };
    this.handleRedirectToCart = this.handleRedirectToCart.bind(this);
  }

  handleRedirectToCart = async () => {
    const { handleCloseCartOverlay } = this.context as TCartOverlayContext;

    await this.setState({
      isRedirectToCart: true
    });
    handleCloseCartOverlay();
  }
 
  render() {
    const { currentCurrency, cart } = this.props.data;
    const isCartEmpty = !cart.order.length;

    return (
      <StyledOutsideClick handler={this.props.onClick} >
        <StyledCartOverlay>
          <CartOverlayTitle 
            amount={cart.amount}
          />
          {isCartEmpty ?
          <StyledCartEmpty
            title='the bag is empty'
          />
          : <StyledItems>
            {cart.order.map((product: TProduct, index: number) => {
              return <StyledCartOverlayItem
                key={index}
                product={product}
                currentCurrency=''
              />
            })}
          </StyledItems>}
          <CartOverlayTotal
            currentCurrency={currentCurrency}
            cart={cart}
          />
          <StyledButtons>
            <StyledViewBagButton onClick={this.handleRedirectToCart}>
              VIEW BAG
            </StyledViewBagButton>
            <StyledCheckOutButton onClick={() => console.log('check out')}>
              CHECK OUT
            </StyledCheckOutButton>
          </StyledButtons>
          {this.state.isRedirectToCart && <Navigate replace to='/cart' />}
        </StyledCartOverlay>
      </StyledOutsideClick>
    )
  }
}

CartOverlay.contextType = CartOverlayContext;

export default injectCartReactiveVars(CartOverlay)