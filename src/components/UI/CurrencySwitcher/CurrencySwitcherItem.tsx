import { PureComponent } from "react";
import { StyledCurrencySwitcherItem } from "./styles";

type Props = {
  label: string;
  symbol: string;
  onClick: () => void;
};

export default class CurrencySwitcherItem extends PureComponent<Props> {
  render() {
    const { label, symbol, onClick } = this.props;

    return (
      <StyledCurrencySwitcherItem onClick={onClick}>
        {`${symbol} ${label}`}
      </StyledCurrencySwitcherItem>
    );
  }
}
