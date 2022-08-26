import { PureComponent } from "react";
import { localStorageKeys } from "../../config";
import { currentProductVar } from "../../graphql/cache";
import { getLocalStorageValue, setValueLocalStorage } from "../../utils/utils";
import ProductBar from "./ProductBar";
import ProductGallery from "./ProductGallery";
import { StyledProduct } from "./styles";

class Product extends PureComponent {
  componentDidMount() {
    if (currentProductVar()) {
      const value = getLocalStorageValue(localStorageKeys.user);
      const newValue = {
        ...value,
        currentProductId: currentProductVar(),
      };
      setValueLocalStorage(localStorageKeys.user, newValue);
    }
  }

  render() {
    const idFromReactiveVar = currentProductVar();
    const idFromLocalStorage = getLocalStorageValue(
      localStorageKeys.user
    )?.currentProductId;
    const id = idFromReactiveVar || idFromLocalStorage;

    return (
      <StyledProduct className="container">
        <ProductGallery id={id} />
        <ProductBar id={id} />
      </StyledProduct>
    );
  }
}

export default Product;
