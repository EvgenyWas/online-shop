import styled from "styled-components";

export const StyledActions = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  flex-basis: 33%;
  gap: 22px;
`;

export const StyledCartContainer = styled.div`
  position: relative;
`;

export const StyledCart = styled.img`
  z-index: 10;
  cursor: pointer;
`;

export const StyledAmountCart = styled.div<{ active: boolean }>`
  ${(props) => props.active && "display: none;"}
  position: absolute;
  z-index: 5;
  bottom: 8px;
  left: 13px;
  min-height: 20px;
  min-width: 20px;
  background: ${({ theme }) => theme.colors.acceptBlack};
  border-radius: 50%;

  & > p {
    padding: 1.5px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: ${({ theme }) => theme.lineHeights.xs};
    color: ${({ theme }) => theme.colors.background};
    text-align: center;
  }
`;

export const StyledBackgroundCover = styled.div`
  position: absolute;
  z-index: 50;
  top: -80px;
  bottom: 0;
  left: 0;
  min-width: 100%;
  background: rgba(57, 55, 72, 0.22);
`;
