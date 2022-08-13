import { Component, Fragment } from 'react';
import styled from 'styled-components';
import Line from '../Molecules/Line';

class CartEmpty extends Component {
    render() {
        return (
            <Fragment>
                <StyledTitle>
                    THE CART IS EMPTY
                </StyledTitle>
                <Line/>
            </Fragment>
        );
    }
}

const StyledTitle = styled.h1`
    margin-bottom: 24px;
    font-weight: ${({theme}) => theme.fontWeights.regular};
    font-size: ${({theme}) => theme.fontSizes.xl};
    line-height: ${({theme}) => theme.lineHeights.percentL};
    color: ${({theme}) => theme.colors.acceptBlack};
    text-align: center;
`

export default CartEmpty;