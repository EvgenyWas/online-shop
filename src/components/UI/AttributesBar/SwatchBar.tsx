import { Component } from 'react'
import SwatchInput from '../Inputs/SwatchInput'
import { StyledAttributeBar, StyledName, StyledSwatchContainer } from './styles'
import { TSwatchBarProps } from './types';

export default class SwatchBar extends Component<TSwatchBarProps> {
  render() {
    const swatches = this.props.swatches;

    return (
      <StyledAttributeBar>
        <StyledName>{`${this.props.name.toUpperCase()}:`}</StyledName>
        <StyledSwatchContainer>
          {swatches.map(swatch => {
            return <SwatchInput 
              key={swatch.id}
              color={swatch.value}
              active={this.props.activeSwatch === swatch.id}
              handleChooseSwatch={() => this.props.handleChoose('swatch', swatch)}
            />
          })}
        </StyledSwatchContainer>
      </StyledAttributeBar>
    )
  }
}
