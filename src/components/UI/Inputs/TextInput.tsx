import { MouseEvent, PureComponent } from "react";
import styled from "styled-components";

type Props = {
  text: string;
  active: boolean;
  handleChooseText: (event: MouseEvent<HTMLInputElement>) => void;
};

export default class TextInput extends PureComponent<Props> {
  render() {
    const { text, active, handleChooseText } = this.props;

    return (
      <StyledInput
        type="button"
        value={text}
        active={active}
        onClick={handleChooseText}
      />
    );
  }
}

export const StyledInput = styled.input<{ active: boolean }>`
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
    props.active &&
    (({ theme }) => `
    color: ${theme.colors.background};
    background: ${theme.colors.primaryText};
  `)}
`;
