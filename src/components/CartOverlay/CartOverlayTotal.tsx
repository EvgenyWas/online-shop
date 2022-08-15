import { Component } from 'react';
import { TCart } from '../../types/types';
import { getAmountCart } from '../../utils/utils';
import { StyledAmount, StyledCartOverlayTotal, StyledTotal } from './styles';

type Props = {
    currentCurrency: string,
    cart: TCart
}

class CartOverlayTotal extends Component<Props> {
    render() {
        const { currentCurrency, cart } = this.props;
        const isCartEmpty = !cart.order.length;

        return (
            <StyledCartOverlayTotal>
                <StyledTotal>
                    Total:
                </StyledTotal>
                <StyledAmount>
                    {`${currentCurrency}${
                        isCartEmpty ? '0' : getAmountCart(cart.order, currentCurrency)
                    }`}
                </StyledAmount>
            </StyledCartOverlayTotal>
        );
    }
}

export default CartOverlayTotal;