import { Component } from 'react';
import { getAmountCart, getAmountTax, getProductsQuantity } from '../../utils/utils';
import PrimaryButton from '../UI/Buttons/PrimaryButton';
import { StyledCartResult, StyledProperties, StyledPropertyName, StyledPropertyValue } from './styles';
import { TCartResultProps } from './types';

class CartResult extends Component<TCartResultProps> {
    render() {
        const tax = 21;
        const { currentCurrency, cart } = this.props;        

        return (
            <StyledCartResult>
                <StyledProperties>
                    <StyledPropertyName>
                        Tax {tax}%:
                    </StyledPropertyName>
                    <StyledPropertyValue>
                        {`${currentCurrency}${getAmountTax(tax, getAmountCart(cart, currentCurrency))}`}
                    </StyledPropertyValue>
                    <StyledPropertyName>
                        Quantity:
                    </StyledPropertyName>
                    <StyledPropertyValue>
                        {getProductsQuantity(cart)}
                    </StyledPropertyValue>
                    <StyledPropertyName total>
                        Total:
                    </StyledPropertyName>
                    <StyledPropertyValue>
                        {`${currentCurrency}${getAmountCart(cart, currentCurrency)}`}
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