import { PureComponent } from "react";
import { ProductPdpFragment } from "../../types/generated";
import ProductBar from "./ProductBar";
import ProductGallery from "./ProductGallery";
import { StyledProduct } from "./styles";
import { TProductProps } from "./types";

class Product extends PureComponent<TProductProps> {
  render() {
    const product = this.props.product as ProductPdpFragment;
    if (!product) {
      return;
    };

    const { gallery, inStock } = product;

    return (
      <StyledProduct className="container">
        <ProductGallery gallery={gallery as string[]} inStock={inStock as boolean} />
        <ProductBar product={product} />
      </StyledProduct>
    );
  }
}

export default Product;
