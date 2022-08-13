import { Component } from 'react';
import { getAmountCart, getAmountTax } from '../../utils/utils';
import PrimaryButton from '../UI/Buttons/PrimaryButton';
import { StyledCartResult, StyledProperties, StyledPropertyName, StyledPropertyValue } from './styles';
import { TCartResultProps } from './types';

class CartResult extends Component<TCartResultProps> {
    render() {
        const tax = 21;
        const { currentCurrency, cart } = this.props;
        const isCartEmpty = !cart.order.length;

        return (
            <StyledCartResult>
                <StyledProperties>
                    <StyledPropertyName>
                        Tax {tax}%:
                    </StyledPropertyName>
                    <StyledPropertyValue>
                        {`${currentCurrency}${
                            isCartEmpty ? '0' : getAmountTax(tax, getAmountCart(cart.order, currentCurrency))
                            }`}
                    </StyledPropertyValue>
                    <StyledPropertyName>
                        Quantity:
                    </StyledPropertyName>
                    <StyledPropertyValue>
                        {cart.amount}
                    </StyledPropertyValue>
                    <StyledPropertyName total>
                        Total:
                    </StyledPropertyName>
                    <StyledPropertyValue>
                        {`${currentCurrency}${
                            isCartEmpty ? '0' : getAmountCart(cart.order, currentCurrency)
                        }`}
                    </StyledPropertyValue>
                </StyledProperties>
                <PrimaryButton onClick={() => console.log('HI!')}>
                    ORDER
                </PrimaryButton>
            </StyledCartResult>
        );
    }
}

export default CartResult;