import { PureComponent } from "react";
import { StyledCurrencySwitcherItem } from "./styles";

type Props = {
  label: string;
  symbol: string;
  onClick: () => void;
  active: boolean;
};

export default class CurrencySwitcherItem extends PureComponent<Props> {
  render() {
    const { label, symbol, onClick, active } = this.props;

    return (
      <StyledCurrencySwitcherItem onClick={onClick} active={active}>
        {`${symbol} ${label}`}
      </StyledCurrencySwitcherItem>
    );
  }
}
