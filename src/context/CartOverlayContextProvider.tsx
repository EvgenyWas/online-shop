import { Component, ReactElement, ReactNode } from "react";
import { CartOverlayContext } from "./CartOverlayContext";

type Props = {
  children: ReactElement | ReactNode;
};

type State = {
  isCartOverlayOpen: boolean;
};

class CartOverlayContextProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isCartOverlayOpen: false,
    };
    this.handleChangeStateCartOverlay =
      this.handleChangeStateCartOverlay.bind(this);
    this.handleCloseCartOverlay = this.handleCloseCartOverlay.bind(this);
  }

  handleChangeStateCartOverlay() {
    this.setState(({ isCartOverlayOpen }) => ({
      isCartOverlayOpen: !isCartOverlayOpen,
    }));
  }

  handleCloseCartOverlay() {
    this.setState({
      isCartOverlayOpen: false,
    });
  }

  render() {
    const value = {
      isCartOverlayOpen: this.state.isCartOverlayOpen,
      handleChangeStateCartOverlay: this.handleChangeStateCartOverlay,
      handleCloseCartOverlay: this.handleCloseCartOverlay,
    };

    return (
      <CartOverlayContext.Provider value={value}>
        {this.props.children}
      </CartOverlayContext.Provider>
    );
  }
}

export default CartOverlayContextProvider;
