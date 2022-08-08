import { Component } from 'react';
import { Link } from 'react-router-dom';
import { currentProductVar } from '../../graphql/cache';
import AddToCartButton from '../UI/Buttons/AddToCartButton';
import { StyledImage, StyledImageBox, StyledName, StyledPrice, StyledProductCard } from './styles';
import { TProductCardProps } from './types';

export default class ProductCard extends Component<TProductCardProps> {
    handleClick(id: string) {
        currentProductVar(id)
    }

    render() {
        return (
            <Link to={`/products/${this.props.id}`} onClick={() => this.handleClick(this.props.id)}>
                <StyledProductCard inStock={this.props.inStock}>
                    <StyledImageBox inStock={this.props.inStock}>
                        <StyledImage src={this.props.image} alt={this.props.name} />
                        {this.props.inStock && <AddToCartButton/>}
                    </StyledImageBox>
                    <StyledName>
                        {`${this.props.brand} ${this.props.name}`}
                    </StyledName>
                    <StyledPrice>
                        {`${this.props.currencySymbol}${this.props.price}`}
                    </StyledPrice>
                </StyledProductCard>
            </Link>
        );
    };
};