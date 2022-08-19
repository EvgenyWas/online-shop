import { Component, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { cartVar, currentProductVar } from '../../graphql/cache';
import { TAttribute } from '../../types/types';
import { addProductToCart, findAttribute, getProductPDP, updateLocalStorageCart } from '../../utils/utils';
import AddToCartButton from '../UI/Buttons/AddToCartButton';
import { StyledImage, StyledImageBox, StyledName, StyledPrice, StyledProductCard } from './styles';
import { TProductCardProps } from './types';

export default class ProductCard extends Component<TProductCardProps> {
    handleClick = (id: string) => currentProductVar(id);

    handleAddToCart = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const product = await getProductPDP(this.props.id);
        const swatch = findAttribute(product, 'swatch');
        const text = findAttribute(product, 'text');
        const newProduct = {
            product: product,
            swatch: swatch?.items![0] as TAttribute,
            text: text?.items![0] as TAttribute,
            amount: 1
        };
    
        cartVar({
            amount: cartVar().amount += 1,
            order: addProductToCart(cartVar().order, newProduct)
        });

        updateLocalStorageCart(cartVar());
    }

    render() {
        const { id, brand, name, image, price, currencySymbol, inStock } = this.props;

        return (
            <Link to={`/products/${id}`} onClick={() => this.handleClick(id)}>
                <StyledProductCard inStock={inStock}>
                    <StyledImageBox inStock={inStock}>
                        <StyledImage src={image} alt={name} />
                        {inStock && 
                        <AddToCartButton
                            handleClick={this.handleAddToCart}
                        />
                        }
                    </StyledImageBox>
                    <StyledName>
                        {`${brand} ${name}`}
                    </StyledName>
                    <StyledPrice>
                        {`${currencySymbol}${price}`}
                    </StyledPrice>
                </StyledProductCard>
            </Link>
        );
    };
};