import { Component } from 'react';
import iconDropDownArrow from '../../../assets/icons/nav/icon-drop-down-arrow.svg';
import { currentCurrencyVar } from '../../../graphql/cache';
import { QUERY_CURRENCIES } from '../../../graphql/queries';
import { injectQuery } from '../../../hocs/injectQuery';
import OutsideClick from '../../../hocs/OutsideClick';
import CurrencySwitcherItem from './CurrencySwitcherItem';
import { StyledCurrencyOverlay, StyledCurrencySwitcher, StyledCurrentCurrency, StyledDropDown } from './styles';

type State = {
    isOpen: boolean,
    symbol: string
};

class CurrencySwitcher extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
          isOpen: false,
          symbol: '$'
        };
    };

    handleSwitcherClick = () => {
        this.setState(({ isOpen }) => ({
          isOpen: !isOpen
        }));        
    };

    handleOutsideClick = () => {
        if(this.state.isOpen) {
            this.setState({ isOpen: false });
        }
    };

    handleChoiceClick = (symbol: string) => {
        currentCurrencyVar(symbol);
        this.setState({ 
            isOpen: false,
            symbol: symbol
        })
    }

    render() {
        const currencies = this.props.data.data?.currencies;

        return (
            <OutsideClick handler={this.handleOutsideClick} >
                <StyledCurrencySwitcher>
                    <StyledCurrentCurrency  onClick={this.handleSwitcherClick} >
                        {this.state.symbol}
                    </StyledCurrentCurrency>
                    <StyledCurrencyOverlay isOpen={this.state.isOpen} >
                        {currencies?.map((currency: any) => {
                            return (
                                <CurrencySwitcherItem
                                    key={currency.symbol}
                                    label={currency.label}
                                    symbol={currency.symbol}
                                    onClick={() => this.handleChoiceClick(currency.symbol)}
                                />
                            )
                        })}
                    </StyledCurrencyOverlay>
                    <StyledDropDown isOpen={this.state.isOpen}>
                        <img src={iconDropDownArrow} alt="Drop down arrow" onClick={this.handleSwitcherClick} />
                    </StyledDropDown>
                </StyledCurrencySwitcher>
            </OutsideClick>
        );
    }
}

export default injectQuery(CurrencySwitcher, QUERY_CURRENCIES);