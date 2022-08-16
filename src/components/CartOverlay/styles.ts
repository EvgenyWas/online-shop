import styled from "styled-components";
import OutsideClick from "../../hocs/OutsideClick";
import { attributeNameFragment, boldSmallHighGragment, mediumLightFragment } from "../../styles/fragments";
import CartItem from "../Cart/CartItem";
import { StyledAttributesBar, StyledBox, StyledButtonsContainer, StyledCartPrice, StyledGallery, StyledManageAmountContainer, StyledTitle } from "../Cart/styles";
import { StyledName as StyledTextBar, StyledTextContainer } from '../UI/AttributesBar/styles';
import { StyledButton } from "../UI/Buttons/ChangeAmountButton";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import { StyledInput as StyledSwatchInput } from "../UI/Inputs/SwatchInput";
import { StyledInput } from "../UI/Inputs/TextInput";
import { StyledLine } from "../UI/Molecules/Line";
import CartEmpty from "../UI/Titles/CartEmpty";

export const StyledCartOverlay = styled.div`
    position: absolute;
    z-index: 100;
    bottom: -35px;
    transform: translate(-100%, 100%);
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 325px;
    padding: 32px 16px;
    background: ${({theme}) => theme.colors.background};
`

export const StyledCartOverlayTotal = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledTotal = styled.h4`
    ${attributeNameFragment}
    font-size: ${({theme}) => theme.fontSizes.sm};
`

export const StyledAmount = styled.h4`
    ${boldSmallHighGragment}
`

export const StyledItemPrice = styled.h4`
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    line-height: ${({theme}) => theme.lineHeights.percentL};
`

export const StyledCartOverlayItem = styled(CartItem)`
    margin-bottom: 0px;
    gap: 8px;

    ${StyledBox} {
        width: 136px;
    }
    
    ${StyledTitle} {
        gap: 0px;
        margin-bottom: 4px;

        & > h2 {
            ${mediumLightFragment}
            font-size: ${({theme}) => theme.fontSizes.sm};
        }
    }

    ${StyledCartPrice} {
        margin-bottom: 8px;
        padding: 0;
        font-size: ${({theme}) => theme.fontSizes.sm};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        line-height: ${({theme}) => theme.lineHeights.percentL};
    }

    ${StyledAttributesBar} {
        gap: 8px;

        & > div {
            ${StyledTextBar} {
                font-size: ${({theme}) => theme.fontSizes.xs};
                font-weight: ${({theme}) => theme.fontWeights.regular};
                line-height: ${({theme}) => theme.lineHeights.xs};
            }

            ${StyledTextContainer} {
                gap: 8px;
            }

            ${StyledInput} {
                width: 24px;
                height: 24px;
                font-size: ${({theme}) => theme.fontSizes.xs};
                line-height: ${({theme}) => theme.lineHeights.percentL};
            }

            ${StyledSwatchInput} {
                width: 16px;
                height: 16px;
            }
        }
    }

    ${StyledManageAmountContainer} {
        & > div {
            margin: 0;

            & > p {
                font-size: ${({ theme }) => theme.fontSizes.sm};   
            }
        }

        ${StyledButton} {
            width: 24px;
            height: 24px;
        }
    }

    ${StyledGallery} {
        width: 120px;
        max-height: 100%;

        ${StyledButtonsContainer} {
            display: none;
        }
    }

    & ~ ${StyledLine} {
        display: none;
    }
`

export const StyledOutsideClick = styled(OutsideClick)`
    position: absolute;
`

export const StyledItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-height: 420px;
    overflow-y: scroll;
    &::-webkit-scrollbar { width: 0 !important }
`

export const StyledButtons = styled.div`
    display: flex;
    gap: 12px;
`

export const StyledViewBagButton = styled(PrimaryButton)`
    padding: 10px;
    margin: 0;
    background: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.primaryText};
    color: ${({theme}) => theme.colors.primaryText};
`

export const StyledCheckOutButton = styled(PrimaryButton)`
    padding: 10px;
    margin: 0;
`

export const StyledCartEmpty = styled(CartEmpty)`
    margin: 0;
    font-size: ${({theme}) => theme.fontSizes.lg};

    & ~ div:nth-of-type(1) {
        display: none;
    }
`