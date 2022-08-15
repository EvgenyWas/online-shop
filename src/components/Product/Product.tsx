import React, { Component } from 'react';
import styled from 'styled-components';
import { currentProductVar } from '../../graphql/cache';
import ProductBar from './ProductBar';
import ProductGallery from './ProductGallery';

class Product extends Component {
    render() {
        const productId = currentProductVar();

        return (
            <StyledProduct className='container'>
                <ProductGallery id={productId} />
                <ProductBar id={productId} />
            </StyledProduct>
        );
    }
}

const StyledProduct = styled.div`
    display: flex;
    gap: 100px;
`

export default Product;