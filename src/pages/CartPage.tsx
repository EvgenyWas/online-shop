import { Component } from 'react';
import CartItem from '../components/Cart/CartItem';
import CartResult from '../components/Cart/CartResult';
import CartTitle from '../components/UI/Titles/CartTitle';
import { injectCartReactiveVars } from '../hocs/injectCartReactiveVars';
import { TProduct } from '../types/types';

class CartPage extends Component<any> {
    render() {
        const { currentCurrency, cart } = this.props.data;

        return (
            <section className='container'>
                <CartTitle/>
                {cart.map((product: TProduct, index: number) => {
                    return <CartItem
                        key={index}
                        product={product}
                    />
                })}
                <CartResult
                    currentCurrency={currentCurrency}
                    cart={cart}
                />
            </section>
        );
    }
}

export default injectCartReactiveVars(CartPage);