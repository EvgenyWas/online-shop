import { Component } from "react";
import iconDropDownArrow from "../../../assets/icons/nav/icon-drop-down-arrow.svg";
import { currentCurrencyVar } from "../../../graphql/cache";
import { currencySwitcherWithData } from "../../../hocs/currencySwitcherWithData";
import OutsideClick from "../../../hocs/OutsideClick";
import { TCurrencySwitcherInjectedProps } from "../../../hocs/types";
import CurrencySwitcherItem from "./CurrencySwitcherItem";
import
  {
    StyledCurrencyOverlay,
    StyledCurrencySwitcher,
    StyledCurrentCurrency,
    StyledDropDown
  } from "./styles";

type State = {
  isOpen: boolean;
  symbol: string;
};

class CurrencySwitcher extends Component<
  TCurrencySwitcherInjectedProps,
  State
> {
  constructor(props: TCurrencySwitcherInjectedProps) {
    super(props);
    this.state = {
      isOpen: false,
      symbol: "$",
    };
  }

  handleSwitcherClick = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  handleOutsideClick = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  handleChoiceClick = (symbol: string) => {
    currentCurrencyVar(symbol);
    this.setState({
      isOpen: false,
      symbol: symbol,
    });
  };

  render() {
    const currencies = this.props.data.data?.currencies;
    const currentCurrency = this.props.data.currentCurrency;
    const { isOpen, symbol } = this.state;

    return (
      <OutsideClick handler={this.handleOutsideClick}>
        <StyledCurrencySwitcher>
          <StyledCurrentCurrency onClick={this.handleSwitcherClick}>
            {symbol}
          </StyledCurrentCurrency>
          <StyledCurrencyOverlay isOpen={isOpen}>
            {currencies?.map(({ symbol, label }: any) => {
              return (
                <CurrencySwitcherItem
                  key={symbol}
                  label={label}
                  symbol={symbol}
                  onClick={() => this.handleChoiceClick(symbol)}
                  active={currentCurrency === symbol}
                />
              );
            })}
          </StyledCurrencyOverlay>
          <StyledDropDown isOpen={isOpen}>
            <img
              src={iconDropDownArrow}
              alt="Drop down arrow"
              onClick={this.handleSwitcherClick}
            />
          </StyledDropDown>
        </StyledCurrencySwitcher>
      </OutsideClick>
    );
  }
}

export default currencySwitcherWithData(CurrencySwitcher);
