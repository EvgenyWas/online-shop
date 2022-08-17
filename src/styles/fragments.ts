import { css } from "styled-components";

export const mediumLightFragment = css`
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.percentL};
`

export const navigationItemFragment = css`
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.percentM};
`

export const attributeNameFragment = css`
    font-family: ${({theme}) => theme.fonts.secondary};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    font-size: ${({theme}) => theme.fontSizes.md};
    line-height: ${({theme}) => theme.lineHeights.sm};
`

export const productTitleFragment = css`
    font-weight: ${({theme}) => theme.fontWeights.regular};
    font-size: ${({theme}) => theme.fontSizes.xl};
    line-height: ${({theme}) => theme.lineHeights.lg};
`

export const primaryButtonFragment = css`
    font-weight: ${({theme}) => theme.fontWeights.bold};
    font-size: ${({theme}) => theme.fontSizes.sm};
    line-height: ${({theme}) => theme.lineHeights.percentM};
`

export const OutOfStockFragment = css`
    content: 'OUT OF STOCK';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(50%, -100%);
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.percentL};
    color: ${({ theme }) => theme.colors.grey};
`

export const boldSmallHighGragment = css`
    font-weight: ${({theme}) => theme.fontWeights.bold};
    font-size: ${({theme}) => theme.fontSizes.sm};
    line-height: ${({theme}) => theme.lineHeights.percentL};
`

export const scrollBarFragment = css`
    z-index: 90;
    overflow-y: hidden;

    &:hover {
        overflow-y: overlay;
    }

    &::-webkit-scrollbar {
        left: 20px;
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px ${({theme}) => theme.colors.grey}; 
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.grey}; 
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({theme}) => theme.colors.acceptBlack}; 
    }
`