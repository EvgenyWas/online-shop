import { Component } from 'react';
import { TManageAmountOperations } from '../../types/types';
import ChangeAmountButton from '../UI/Buttons/ChangeAmountButton';
import { StyledAmount, StyledManageAmount } from './styles';

type Props = {
    amount: number,
    handleChangeAmount: (operation: TManageAmountOperations) => void
}

class ManageAmount extends Component<Props> {
    render() {
        return (
            <StyledManageAmount>
                <ChangeAmountButton 
                    operation='increase' 
                    onClick={() => this.props.handleChangeAmount('increase')}
                />
                    <StyledAmount>
                        {this.props.amount}
                    </StyledAmount>
                <ChangeAmountButton 
                    operation='decrease'
                    onClick={() => this.props.handleChangeAmount('decrease')}
                />
            </StyledManageAmount>
        );
    }
}

export default ManageAmount;