import { Component, MouseEvent } from 'react';
import iconSwitchArrow from '../../../assets/icons/cart/icon-switch-arrow.svg';

type Props = {
    onSwitch: (event: MouseEvent<HTMLButtonElement>) => void,
    className?: string
}

export default class SwitchArrowButton extends Component<Props> {
    render() {
        const { onSwitch, className } = this.props;

        return (
            <button 
                onClick={onSwitch}
                className={className}
            >
               <img src={iconSwitchArrow} alt="Switch arrow" /> 
            </button>
        );
    }
}