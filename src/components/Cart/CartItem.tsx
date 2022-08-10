import { Component, Fragment } from 'react';
import { cartVar } from '../../graphql/cache';
import { injectCurrentCurrency } from '../../hocs/injectCurrentCurrency';
import { TAttribute, TManageAmountOperations } from '../../types/types';
import { addProductToCart, decreaseProductAmount, getCurrentPrice } from '../../utils/utils';
import AttributesBar from '../UI/AttributesBar/AttributesBar';
import { TType } from '../UI/AttributesBar/types';
import Line from '../UI/Molecules/Line';
import ManageAmount from './ManageAmount';
import { StyledCartPrice, StyledTitle } from './styles';
import { TCartItemState } from './types';

// TCartItemProps
class CartItem extends Component<any, TCartItemState> {
    constructor(props: any) {
        super(props)
        this.state = {
            chosenSwatch: this.props.swatch,
            chosenText: this.props.text,
        }
        this.handleChoose = this.handleChoose.bind(this)
    }

    handleChoose(type: TType, attribute: TAttribute) {
        if(type === 'swatch') {
          this.setState({
            chosenSwatch: {...attribute},
          })
        } else if(type === 'text') {
          this.setState({
            chosenText: {...attribute},
          })    
        }
    }

    handleChangeAmount = (operation: TManageAmountOperations) => {
        const cart = cartVar();
        const product = this.props.product;

        if (operation === 'decrease') {
            cartVar(decreaseProductAmount(cart, product));
        } else {
            cartVar(addProductToCart(cart, product))
        }
    }

    render() {
        const { product, swatch, text, amount } = this.props.product;
        const { brand, name, prices, attributes } = product;
        const currentCurrency = this.props.currentCurrency
        const { chosenSwatch, chosenText } = this.state;

        return (
            <Fragment>
                <div>
                    <StyledTitle
                        brand={brand}
                        name={name}
                    />
                    <StyledCartPrice>
                        {`${currentCurrency}${getCurrentPrice(prices, currentCurrency)?.amount as number}`}
                    </StyledCartPrice>
                    <AttributesBar
                        attributes={attributes}
                        handleChoose={this.handleChoose}
                        chosenSwatch={chosenSwatch}
                        chosenText={chosenText}
                    />
                    <ManageAmount 
                        amount={amount}
                        handleChangeAmount={this.handleChangeAmount}
                    />
                </div>
                <Line/>
            </Fragment>
        );
    }
}

export default injectCurrentCurrency(CartItem);