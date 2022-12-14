import { PureComponent } from "react";
import styled from "styled-components";
import { primaryButtonFragment } from "../../../styles/fragments";

type Props = {
  children: string;
  onClick: () => void;
  className?: string;
};

export default class PrimaryButton extends PureComponent<Props> {
  render() {
    const { children, onClick, className } = this.props;

    return (
      <StyledButton onClick={onClick} className={className}>
        {children.toUpperCase()}
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 32px;
  margin-bottom: 40px;
  ${primaryButtonFragment}
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.green};

  &:active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  }
`;
