import styled from "styled-components";
import ProductTitle from "../UI/Titles/ProductTitle";
import { StyledPrice } from '../Product/styles';
import AttributesBar from "../UI/AttributesBar/AttributesBar";

export const StyledCartResult = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 279px;
    padding-top: 8px;
`

export const StyledProperties = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
`

export const StyledPropertyName = styled.h4<{ total?: boolean }>`
    font-weight: ${props => (props.total ? ({theme}) => theme.fontWeights.medium : ({theme}) => theme.fontWeights.regular)};
    font-size: ${({theme}) => theme.fontSizes.lg};
    line-height: ${({theme}) => theme.lineHeights.lg};
`

export const StyledPropertyValue = styled.span`
    font-size: ${({theme}) => theme.fontSizes.lg};
    line-height: ${({theme}) => theme.lineHeights.lg};
    font-weight: ${({theme}) => theme.fontWeights.bold};
`

export const StyledTitle = styled(ProductTitle)`
    margin-bottom: 20px !important;
`

export const StyledCartPrice = styled(StyledPrice)`
    margin-bottom: 20px !important;
    line-height: ${({theme}) => theme.lineHeights.md};
`

export const StyledAttributesBar = styled(AttributesBar)`
    margin-bottom: 30px !important;
`

export const StyledManageAmount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const StyledAmount = styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.percentL};
`