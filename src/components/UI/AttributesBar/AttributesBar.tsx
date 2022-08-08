import { Component } from 'react';
import { StyledAttributesBar } from './styles';
import SwatchBar from './SwatchBar';
import TextBar from './TextBar';
import { TAttributesBarProps } from './types';

class AttributesBar extends Component<TAttributesBarProps> {
    render() {
        const swatch = this.props.attributes?.find((attribute: any) => attribute?.type === 'swatch');
        const text = this.props.attributes?.find((attribute: any) => attribute?.type === 'text');
        
        return (
            <StyledAttributesBar>
                {text && 
                <TextBar
                    name={text.name}
                    activeText={this.props.chosenText?.id ?? text.items[0].id}
                    texts={text.items}
                    handleChoose={this.props.handleChoose}
                />}
                {swatch && 
                <SwatchBar
                    name={swatch.name}
                    activeSwatch={this.props.chosenSwatch?.id ?? swatch.items[0].id}
                    swatches={swatch.items}
                    handleChoose={this.props.handleChoose}
                />}
            </StyledAttributesBar>
        );
    }
}

export default AttributesBar;