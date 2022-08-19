import styled from "styled-components";
import { attributeNameFragment } from "../../../styles/fragments";

export const StyledAttributeBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledName = styled.h4`
  ${attributeNameFragment}
`;

export const StyledSwatchContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledAttributesBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;
`;
