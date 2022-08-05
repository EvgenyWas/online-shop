import { Component } from 'react'
import styled from 'styled-components'
import iconSircleCart from '../../../assets/icons/card/icon-sircle-cart.svg'

export default class AddToCartButton extends Component {
  render() {
    return (
      <StyledButton className='add-to-cart-button'>
        <img src={iconSircleCart} alt="Cart" />
      </StyledButton>
    )
  }
};

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 15px;
  display: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`