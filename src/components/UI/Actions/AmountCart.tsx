import { Component } from 'react';
import { injectCartReactiveVars } from '../../../hocs/injectCartReactiveVars';
import { StyledAmountCart } from './styles';

class AmountCart extends Component<any> {
    render() {
        const { amount } = this.props.data.cart;
        
        return (
            <StyledAmountCart>
                <p>
                    { amount }
                </p>
            </StyledAmountCart>
        );
    }
}

export default injectCartReactiveVars(AmountCart);