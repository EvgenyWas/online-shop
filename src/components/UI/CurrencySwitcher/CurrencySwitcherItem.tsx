import { Component } from "react";
import { StyledCurrencySwitcherItem } from "./styles";

type Props = {
  label: string;
  symbol: string;
  onClick: () => void;
};

export default class CurrencySwitcherItem extends Component<Props> {
  render() {
    return (
      <StyledCurrencySwitcherItem onClick={this.props.onClick}>
        {`${this.props.symbol} ${this.props.label}`}
      </StyledCurrencySwitcherItem>
    );
  }
}
