import { MouseEvent, PureComponent } from "react";
import styled from "styled-components";
import decreaseIcon from "../../../assets/icons/cart/icon-minus-square.svg";
import increaseIcon from "../../../assets/icons/cart/icon-plus-square.svg";
import { TManageAmountOperations } from "../../../types/types";

type Props = {
  operation: TManageAmountOperations;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default class ChangeAmountButton extends PureComponent<Props> {
  render() {
    const { operation, onClick } = this.props;

    return (
      <StyledButton onClick={onClick}>
        <img
          src={
            operation === "decrease" ? decreaseIcon : increaseIcon
          }
          alt={operation}
        />
      </StyledButton>
    );
  }
}

export const StyledButton = styled.button`
  width: 45px;
  height: 45px;
`;
