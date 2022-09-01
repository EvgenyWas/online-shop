import { Component } from "react";
import styled from "styled-components";
import Product from "../components/Product/Product";
import { StyledBackgroundCover } from "../components/UI/Actions/styles";
import {
  CartOverlayContext,
  TCartOverlayContext,
} from "../context/CartOverlayContext";
import { injectCurrentProduct } from "../hocs/injectCurrentProduct";
import { InjectedCurrentProductProps } from "../hocs/types";
import { ProductPdpFragment } from "../types/generated";

class PDPPage extends Component<InjectedCurrentProductProps> {
  render() {
    const { isCartOverlayOpen } = this.context as TCartOverlayContext;
    const product = this.props.data.data?.product as ProductPdpFragment;

    return (
      <StyledPDPPage>
        <Product product={product} />
        {isCartOverlayOpen && <StyledBackgroundCover />}
      </StyledPDPPage>
    );
  }
}

PDPPage.contextType = CartOverlayContext;

const StyledPDPPage = styled.section`
  position: relative;
  height: calc(100vh - 159.2px);
`;

export default injectCurrentProduct(PDPPage);
