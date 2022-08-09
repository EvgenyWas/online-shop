import { Component } from 'react';
import styled from 'styled-components';

export default class CartTitle extends Component {
    render() {
        return (
            <StyledCartTitle>
                CART
            </StyledCartTitle>
        );
    }
}

const StyledCartTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.xxl};
    margin-bottom: 103px !important;
`