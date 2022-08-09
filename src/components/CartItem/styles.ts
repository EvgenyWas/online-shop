import styled from "styled-components";

export const StyledCartResult = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 279px;
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