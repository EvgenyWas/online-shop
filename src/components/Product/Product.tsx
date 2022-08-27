import { PureComponent } from "react";
import { localStorageKeys } from "../../config";
import { currentProductVar } from "../../graphql/cache";
import { ProductPdpFragment } from "../../types/generated";
import { getLocalStorageValue, getProductPDP, setValueLocalStorage } from "../../utils/utils";
import ProductBar from "./ProductBar";
import ProductGallery from "./ProductGallery";
import { StyledProduct } from "./styles";
import { TProductState } from "./types";

class Product extends PureComponent<{}, TProductState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {}
    }
  }

  async componentDidMount() {
    const key = localStorageKeys.user;
    const idFromReactiveVar = currentProductVar();
    const idFromLocalStorage = getLocalStorageValue(
      key
    )?.currentProductId;
    const id = idFromReactiveVar || idFromLocalStorage;

    // Request product by id and define default attributes
    const product = await getProductPDP(id);
    this.setState({
      product: product
    });

    if (idFromReactiveVar) {
      const value = getLocalStorageValue(key);
      const newValue = {
        ...value,
        currentProductId: idFromReactiveVar,
      };
      setValueLocalStorage(key, newValue);
    };
  }

  render() {
    const product = this.state.product as ProductPdpFragment;
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
