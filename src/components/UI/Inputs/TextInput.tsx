import { MouseEvent, PureComponent } from "react";
import styled from "styled-components";

type Props = {
  text: string;
  active: boolean;
  handleChooseText: (event: MouseEvent<HTMLInputElement>) => void;
  inStock: boolean;
};

export default class TextInput extends PureComponent<Props> {
  render() {
    const { text, active, handleChooseText, inStock } = this.props;

    return (
      <StyledInput
        type="button"
        value={text}
        active={active}
        onClick={handleChooseText}
        inStock={inStock}
      />
    );
  }
}

export const StyledInput = styled.input<{ active: boolean; inStock?: boolean }>`
  width: 63px;
  height: 45px;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  letter-spacing: 0.05em;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;

  ${(props) =>
    props.inStock &&
    props.active &&
    (({ theme }) => `
    color: ${theme.colors.background};
    background: ${theme.colors.primaryText};
  `)}
`;
