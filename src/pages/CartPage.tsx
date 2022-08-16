import { Component } from 'react';
import styled from 'styled-components';
import Cart from '../components/Cart/Cart';
import { StyledBackgroundCover } from '../components/UI/Actions/styles';
import { CartOverlayContext, TCartOverlayContext } from '../context/CartOverlayContext';

class CartPage extends Component {
    render() {
        const { isCartOverlayOpen } = this.context as TCartOverlayContext;

        return (
            <StyledCartPage>
                <Cart/>
                {isCartOverlayOpen &&
                <StyledBackgroundCover/>
                }
            </StyledCartPage>
        );
    }
}

CartPage.contextType = CartOverlayContext;

const StyledCartPage = styled.section`
    position: relative;
`

export default CartPage;