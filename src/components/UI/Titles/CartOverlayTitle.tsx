import React, { Component } from 'react';
import styled from 'styled-components';
import { boldSmallHighGragment } from '../../../styles/fragments';

type Props = {
    amount: number
}

class CartOverlayTitle extends Component<Props> {
    render() {
        const { amount } = this.props;
        const conditionAmount = amount === 1;

        return (
            <StyledCartOverlayTitle>
                {`My bag, `}
                <StyledCartOverlaySpanTitle>
                    {`${amount}${conditionAmount ? ' item' : ' items'}`}
                </StyledCartOverlaySpanTitle>
            </StyledCartOverlayTitle>
        );
    }
}

const StyledCartOverlayTitle = styled.h4`
    ${boldSmallHighGragment}
`

const StyledCartOverlaySpanTitle = styled.span`
    font-weight: ${({theme}) => theme.fontWeights.medium};
`

export default CartOverlayTitle;