import { Component, Fragment } from "react";
import styled from "styled-components";
import Line from "../Molecules/Line";

export default class CartTitle extends Component {
  render() {
    return (
      <Fragment>
        <StyledCartTitle>CART</StyledCartTitle>
        <Line />
      </Fragment>
    );
  }
}

const StyledCartTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.xxl};
  margin-bottom: 55px !important;
`;
