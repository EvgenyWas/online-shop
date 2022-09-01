import { Component } from "react";
import iconDropDownArrow from "../../../assets/icons/nav/icon-drop-down-arrow.svg";
import { localStorageKeys } from "../../../config";
import { currentCurrencyVar } from "../../../graphql/cache";
import { currencySwitcherWithData } from "../../../hocs/currencySwitcherWithData";
import OutsideClick from "../../../hocs/OutsideClick";
import { TCurrencySwitcherInjectedProps } from "../../../hocs/types";
import {
  getLocalStorageValue,
  updateLocalStorageCurrencySymbol,
} from "../../../utils/utils";
import CurrencySwitcherItem from "./CurrencySwitcherItem";
import {
  StyledCurrencyOverlay,
  StyledCurrencySwitcher,
  StyledCurrentCurrency,
  StyledDropDown,
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

  componentDidMount() {
    const localStorageCurrency = getLocalStorageValue(
      localStorageKeys.user
    )?.currencySymbol;
    const { symbol } = this.state;

    if (localStorageCurrency) {
      this.setState({
        symbol: localStorageCurrency,
      });
      currentCurrencyVar(localStorageCurrency);
    } else {
      updateLocalStorageCurrencySymbol(symbol);
      currentCurrencyVar(symbol);
    }
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
    updateLocalStorageCurrencySymbol(symbol);
  };

  getCurrencyItems = () => {
    const currencies = this.props.data.data?.currencies;
    const currentCurrency = this.props.data.currentCurrency;
    const currencyItems = currencies?.map(({ symbol, label }: any) => {
      return (
        <CurrencySwitcherItem
          key={symbol}
          label={label}
          symbol={symbol}
          onClick={() => this.handleChoiceClick(symbol)}
          active={currentCurrency === symbol}
        />
      );
    });

    return currencyItems;
  };

  render() {
    const { isOpen, symbol } = this.state;

    return (
      <OutsideClick handler={this.handleOutsideClick}>
        <StyledCurrencySwitcher>
          <StyledCurrentCurrency onClick={this.handleSwitcherClick}>
            {symbol}
          </StyledCurrentCurrency>
          <StyledCurrencyOverlay isOpen={isOpen}>
            {this.getCurrencyItems()}
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
