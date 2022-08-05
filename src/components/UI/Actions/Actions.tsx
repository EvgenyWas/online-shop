import { Component } from 'react';
import iconCart from '../../../assets/icons/nav/icon-cart.svg';
import CartOverlay from '../CartOverlay/CartOverlay';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import { StyledActions } from './styles';

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
        <img src={iconCart} alt="Cart" onClick={this.handleClick}/>
        <CartOverlay/>
      </StyledActions>
    )
  }
}
