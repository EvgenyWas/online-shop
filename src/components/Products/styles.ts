import styled from "styled-components";
import { mediumLightFragment } from "../../styles/fragments";

export const StyledProducts = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    row-gap: 103px;
    margin-bottom: 167px !important;
`

export const StyledProductCard = styled.article<{ inStock: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 16px;
    cursor: pointer;
    ${props => !props.inStock && 'opacity: 0.5;'}

    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, ${props => !props.inStock ? '0.38' : '0.19'});
    }

    &:hover .add-to-cart-button {
        display: inherit;
    }
`

export const StyledImageBox = styled.div<{ inStock: boolean}>`
    position: relative;

    &::after {
        ${props => props.inStock && 'display: none;'}
        content: 'OUT OF STOCK';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(50%, -100%);
        font-size: ${({ theme }) => theme.fontSizes.lg};
        line-height: ${({ theme }) => theme.lineHeights.percentL};
        color: ${({ theme }) => theme.colors.grey};
    }
`

export const StyledImage = styled.img`
    width: 354px;
    height: 330px;
    margin-bottom: 24px;
    object-fit: cover;
`

export const StyledName = styled.h4`
    ${mediumLightFragment}
`

export const StyledPrice = styled.p`
    ${mediumLightFragment}
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`

export const StyledCategoryName = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    line-height: ${({ theme }) => theme.lineHeights.percentL};
    margin-bottom: 103px !important;
`