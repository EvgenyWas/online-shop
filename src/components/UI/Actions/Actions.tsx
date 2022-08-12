import { Component } from 'react';
import iconCart from '../../../assets/icons/nav/icon-cart.svg';
import CartOverlay from '../../CartOverlay/CartOverlay';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import AmountCart from './AmountCart';
import { StyledActions, StyledCart, StyledCartContainer } from './styles';

type State = {
  isOpen: boolean
};

export default class Actions extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  };

  handleClick = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    return (
      <StyledActions>
        <CurrencySwitcher/>
        <StyledCartContainer>
          <StyledCart src={iconCart} alt="Cart" onClick={this.handleClick}/>
          <AmountCart/>
        </StyledCartContainer>
        <CartOverlay/>
      </StyledActions>
    )
  }
}
