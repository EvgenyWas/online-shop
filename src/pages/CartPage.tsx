import { Component } from 'react';
import CartItem from '../components/Cart/CartItem';
import CartResult from '../components/Cart/CartResult';
import CartEmpty from '../components/UI/Titles/CartEmpty';
import CartTitle from '../components/UI/Titles/CartTitle';
import { injectCartReactiveVars } from '../hocs/injectCartReactiveVars';
import { TProduct } from '../types/types';

class CartPage extends Component<any> {
    render() {
        const { currentCurrency, cart } = this.props.data;
        const isCartEmpty = !cart.order.length;

        return (
            <section className='container'>
                <CartTitle/>
                {isCartEmpty ?
                <CartEmpty/>
                : cart.order.map((product: TProduct, index: number) => {
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