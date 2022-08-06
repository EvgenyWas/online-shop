import { Component } from 'react';
import iconDropDownArrow from '../../../assets/icons/nav/icon-drop-down-arrow.svg';
import { currentCurrencyVar } from '../../../graphql/cache';
import { QUERY_CURRENCIES } from '../../../graphql/queries';
import { injectQuery } from '../../../hocs/injectQuery';
import OutsideClick from '../../../hocs/OutsideClick';
import CurrencySwitcherItem from './CurrencySwitcherItem';
import { StyledCurrencyOverlay, StyledCurrencySwitcher, StyledCurrentCurrency, StyledDropDown } from './styles';

type State = {
    isOpen: boolean
};

class CurrencySwitcher extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
          isOpen: false,
        };
    };

    componentDidMount() {
        currentCurrencyVar(this.props.data.data?.currencies[0].symbol)
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
        this.setState({ isOpen: false })
    }

    render() {
        const currencies = this.props.data.data?.currencies;
        const currentCurrency = this.props.currentCurrency;

        return (
            <OutsideClick handler={this.handleOutsideClick} >
                <StyledCurrencySwitcher>
                    <StyledCurrentCurrency  onClick={this.handleSwitcherClick} >
                        {currentCurrency}
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