import { Component } from 'react';
import CartResult from '../components/CartItem/CartResult';
import CartTitle from '../components/UI/Titles/CartTitle';
import { injectCartReactiveVars } from '../hocs/injectCartReactiveVars';

class CartPage extends Component<any> {
    render() {
        const { currentCurrency, cart } = this.props.data;

        return (
            <section className='container'>
                <CartTitle/>
                <CartResult
                    currentCurrency={currentCurrency}
                    cart={cart}
                />
            </section>
        );
    }
}

export default injectCartReactiveVars(CartPage);