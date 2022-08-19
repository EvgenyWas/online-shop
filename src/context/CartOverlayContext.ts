import { createContext } from "react";

export type TCartOverlayContext = {
  isCartOverlayOpen: boolean;
  handleChangeStateCartOverlay: () => void;
  handleCloseCartOverlay: () => void;
};

const initialContext: TCartOverlayContext = {
  isCartOverlayOpen: false,
  handleChangeStateCartOverlay: () => {},
  handleCloseCartOverlay: () => {},
};

export const CartOverlayContext =
  createContext<TCartOverlayContext>(initialContext);
