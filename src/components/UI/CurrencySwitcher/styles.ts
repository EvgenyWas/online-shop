import styled, { css } from "styled-components";
import { mediumLightFragment } from "../../../styles/fragments";

export const StyledCurrencySwitcher = styled.div`
  display: flex;
`;

export const StyledCurrencyOverlay = styled.ul<{ isOpen: boolean }>`
  ${(props) =>
    !props.isOpen &&
    css`
      display: none !important;
    `}
  position: absolute;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px 0;
  background: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  transform: translate(-20%, 100%);
`;

export const StyledCurrencySwitcherItem = styled.li<{ active: boolean }>`
  padding: 8px 38px 8px 20px;
  ${mediumLightFragment}
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  cursor: pointer;
  ${props => props.active && css`background: ${({ theme }) => theme.colors.acceptGrey};`}

  &:hover {
    background: ${({ theme }) => theme.colors.acceptGrey};
  }
`;

export const StyledCurrentCurrency = styled.div`
  padding: 0 10px;
  cursor: pointer;
`;

export const StyledDropDown = styled.div<{ isOpen: boolean }>`
  align-self: center;
  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(540deg);
    `}
  transition: all 500ms ease-in-out;
  cursor: pointer;
`;
