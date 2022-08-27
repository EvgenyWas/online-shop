import { Component } from "react";
import styled from "styled-components";
import Product from "../components/Product/Product";
import { StyledBackgroundCover } from "../components/UI/Actions/styles";
import {
  CartOverlayContext,
  TCartOverlayContext,
} from "../context/CartOverlayContext";

class PDPPage extends Component {
  render() {
    const { isCartOverlayOpen } = this.context as TCartOverlayContext;

    return (
      <StyledPDPPage>
        <Product />
        {isCartOverlayOpen && <StyledBackgroundCover />}
      </StyledPDPPage>
    );
  }
}

PDPPage.contextType = CartOverlayContext;

const StyledPDPPage = styled.section`
  position: relative;
  /* padding-bottom: 88px; */
  height: calc(100vh - 159.2px);
`;

export default PDPPage;
