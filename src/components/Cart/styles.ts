import styled from "styled-components";
import ProductTitle from "../UI/Titles/ProductTitle";
import { StyledPrice } from "../Product/styles";
import AttributesBar from "../UI/AttributesBar/AttributesBar";
import SwitchArrowButton from "../UI/Buttons/SwitchArrowButton";

export const StyledCartResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 279px;
  padding-top: 8px;
`;

export const StyledProperties = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`;

export const StyledPropertyName = styled.h4<{ total?: boolean }>`
  font-weight: ${(props) =>
    props.total
      ? ({ theme }) => theme.fontWeights.medium
      : ({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.lg};
`;

export const StyledPropertyValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledTitle = styled(ProductTitle)`
  margin-bottom: 20px;
`;

export const StyledCartPrice = styled(StyledPrice)`
  margin-bottom: 20px;
  line-height: ${({ theme }) => theme.lineHeights.md};
`;

export const StyledAttributesBar = styled(AttributesBar)`
  gap: 16px;
  margin-bottom: 0px !important;
`;

export const StyledManageAmountContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const StyledManageAmount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;
`;

export const StyledAmount = styled.p`
  align-self: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.percentL};
`;

export const StyledCartItem = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const StyledGallery = styled.div`
  position: relative;
  width: 200px;
  min-height: 100%;
`;

export const StyledGalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const StyledButtonsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const StyledSwitchBackButton = styled(SwitchArrowButton)`
  transform: scaleX(-1);
`;

export const StyledBox = styled.div``;
