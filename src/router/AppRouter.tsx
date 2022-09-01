import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { localStorageKeys } from "../config";
import CartPage from "../pages/CartPage";
import PDPPage from "../pages/PDPPage";
import PLPPage from "../pages/PLPPage";
import { getLocalStorageValue, setValueLocalStorage } from "../utils/utils";
import Layout from "./Layout";

type State = {
  indexCategory: string;
};

export default class AppRouter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      indexCategory: "all",
    };
  }

  componentDidMount() {
    const key = localStorageKeys.user;
    const storageValue = getLocalStorageValue(key);
    const currentCategory = storageValue?.currentCategory;
    if (currentCategory) {
      this.setState({
        indexCategory: currentCategory,
      });
    } else {
      setValueLocalStorage(key, {
        ...storageValue,
        currentCategory: this.state.indexCategory,
      });
    }
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate replace to={this.state.indexCategory} />}
          />
          <Route path=":category" element={<PLPPage />} />
          <Route path="product/:id" element={<PDPPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    );
  }
}
