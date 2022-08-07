import styled from "styled-components";

export const StyledProductGallery = styled.div`
    display: flex;
    gap: 37px;
`

export const StyledGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
    height: 511px;
    overflow-y: scroll;
    &::-webkit-scrollbar { width: 0 !important }
`

export const StyledGalleryPicture = styled.img<{ active: boolean }>`
    width: 80px;
    height: 80px;
    padding: 2px;
    object-fit: cover;
    cursor: pointer;
    ${props => props.active && (({theme}) => `border: 3px solid ${theme.colors.acceptGrey}`)}
`

export const StyledActivePicture = styled.img`
    width: 610px;
    height: 511px;
    object-fit: cover;
`