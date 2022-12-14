import { MouseEvent, PureComponent } from "react";
import styled from "styled-components";

type Props = {
  color: string;
  active: boolean;
  handleChooseSwatch: (event: MouseEvent<HTMLInputElement>) => void;
  inStock: boolean;
};

export default class SwatchInput extends PureComponent<Props> {
  render() {
    const { color, active, handleChooseSwatch, inStock } = this.props;

    return (
      <StyledInput
        type="button"
        bachground={color}
        active={active}
        onClick={handleChooseSwatch}
        inStock={inStock}
      />
    );
  }
}

export const StyledInput = styled.input<{
  bachground: string;
  active: boolean;
  inStock?: boolean;
}>`
  width: 32px;
  height: 32px;
  outline: 1px solid ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.acceptGrey};
  background: ${(props) => props.bachground};
  cursor: pointer;

  ${(props) =>
    props.inStock &&
    props.active &&
    (({ theme }) => `outline: 1px solid ${theme.colors.green} !important;`)}
`;
