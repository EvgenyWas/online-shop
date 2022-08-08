import styled from "styled-components";
import { attributeNameFragment, navigationItemFragment } from "../../styles/fragments";

export const StyledProductGallery = styled.div`
    display: flex;
    gap: 37px;
`

export const StyledGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 38px;
    height: 511px;
    overflow-y: scroll;
    &::-webkit-scrollbar { width: 0 !important }
`

export const StyledGalleryPicture = styled.img<{ active: boolean }>`
    width: 80px;
    height: 80px;
    padding: 1px;
    object-fit: cover;
    cursor: pointer;
    ${props => props.active && (({theme}) => `border: 1px solid ${theme.colors.green}`)}
`

export const StyledActivePicture = styled.img`
    width: 610px;
    height: 511px;
    object-fit: cover;
`

export const StyledProductBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 292px;
`

export const StyledPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`

export const StyledPriceName = styled.h4`
    ${attributeNameFragment}
`

export const StyledPrice = styled.h4`
    padding: 10px 0;
    font-weight: ${({theme}) => theme.fontWeights.bold};
    font-size: ${({theme}) => theme.fontSizes.lg};
    line-height: ${({theme}) => theme.lineHeights.sm};
`

export const StyledDescription = styled.div`
    font-family: ${({theme}) => theme.fonts.secondary};
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: ${({theme}) => theme.fontWeights.regular};
    line-height: ${({theme}) => theme.lineHeights.percentL};
`