import { Markup } from "interweave";
import styled, { css } from "styled-components";
import {
  attributeNameFragment,
  OutOfStockFragment,
  scrollBarFragment,
} from "../../styles/fragments";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

export const StyledProductGallery = styled.div`
  display: flex;
  gap: 37px;
`;

export const StyledGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  height: 511px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

export const StyledGalleryPicture = styled.img<{ active: boolean }>`
  width: 80px;
  height: 80px;
  padding: 1px;
  object-fit: cover;
  cursor: pointer;
  ${(props) =>
    props.active &&
    (({ theme }) =>
      css`
        border: 1px solid ${theme.colors.green};
      `)}
`;

export const StyledActivePictureBox = styled.div<{ inStock: boolean }>`
  position: relative;
  height: 511px;
  ${(props) =>
    !props.inStock &&
    css`
      opacity: 0.5;
    `}

  &::after {
    ${(props) =>
      props.inStock &&
      css`
        display: none;
      `}
    ${OutOfStockFragment}
        font-size: ${({ theme }) => theme.fontSizes.xxxl};
    transform: translate(55%, -100%);
  }
`;

export const StyledActivePicture = styled.img`
  width: 610px;
  height: 511px;
  object-fit: cover;
`;

export const StyledProductBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StyledPriceName = styled.h4`
  ${attributeNameFragment}
`;

export const StyledPrice = styled.h4`
  padding: 10px 0;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;

export const StyledDescription = styled(Markup)`
  max-height: 100px;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.percentL};

  ${scrollBarFragment}
`;

export const ProductButton = styled(PrimaryButton)<{
  isAddedToCart: boolean;
  inStock: boolean;
}>`
  margin: -3px -3px 37px -3px;
  border: 3px solid ${({ theme }) => theme.colors.green};

  ${(props) =>
    !props.inStock &&
    css`
      opacity: 0.4;
    `}

  ${(props) =>
    props.isAddedToCart &&
    (({ theme }) => css`
      color: ${theme.colors.green};
      border: 3px solid ${theme.colors.green};
      background: ${theme.colors.background};
    `)}
    transition: all 300ms ease-in-out;
`;

export const StyledProduct = styled.div`
  display: flex;
  gap: 100px;
`;