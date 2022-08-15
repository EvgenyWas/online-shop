import { Component } from 'react';
import styled from 'styled-components';
import { injectCartReactiveVars } from '../../hocs/injectCartReactiveVars';
import { TProduct } from '../../types/types';
import CartEmpty from '../UI/Titles/CartEmpty';
import CartTitle from '../UI/Titles/CartTitle';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Cart extends Component<any> {
    render() {
        const { currentCurrency, cart } = this.props.data;
        const isCartEmpty = !cart.order.length;

        return (
            <StyledCart className='container'>
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
            </StyledCart>
        );
    }
}

const StyledCart = styled.div`
    
`

export default injectCartReactiveVars(Cart);