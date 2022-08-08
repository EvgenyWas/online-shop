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