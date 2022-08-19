import { Component, Fragment } from "react";
import styled from "styled-components";
import Line from "../Molecules/Line";

type Props = {
  className?: string;
  title: string;
};

class CartEmpty extends Component<Props> {
  render() {
    const { className, title } = this.props;
    const upperTitle = title.toUpperCase();

    return (
      <Fragment>
        <StyledTitle className={className}>{upperTitle}</StyledTitle>
        <Line />
      </Fragment>
    );
  }
}

const StyledTitle = styled.h1`
  margin-bottom: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.percentL};
  color: ${({ theme }) => theme.colors.acceptBlack};
  text-align: center;
`;

export default CartEmpty;
