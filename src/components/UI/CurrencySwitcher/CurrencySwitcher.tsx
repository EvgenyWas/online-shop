import { Component } from 'react';
import iconDropDownArrow from '../../../assets/icons/nav/icon-drop-down-arrow.svg';
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

    handleClick = () => {
        this.setState(({ isOpen }) => ({
          isOpen: !isOpen
        }));        
    };

    handleOutsideClick = () => {
        if(this.state.isOpen) {
            this.setState({ isOpen: false });
        }
    }

    render() {
        const currencies = this.props.data.data?.currencies;

        return (
            <OutsideClick handler={this.handleOutsideClick}>
                <StyledCurrencySwitcher>
                    <StyledCurrentCurrency  onClick={this.handleClick} >
                        $
                    </StyledCurrentCurrency>
                    <StyledCurrencyOverlay isOpen={this.state.isOpen}>
                        {currencies?.map((currency: any) => {
                            return (
                                <CurrencySwitcherItem
                                    key={currency.symbol}
                                    label={currency.label}
                                    symbol={currency.symbol}
                                />
                            )
                        })}
                    </StyledCurrencyOverlay>
                    <StyledDropDown isOpen={this.state.isOpen}>
                        <img src={iconDropDownArrow} alt="Drop down arrow" onClick={this.handleClick} />
                    </StyledDropDown>
                </StyledCurrencySwitcher>
            </OutsideClick>
        );
    }
}

export default injectQuery(CurrencySwitcher, QUERY_CURRENCIES);