import { Component } from 'react';
import TextInput from '../Inputs/TextInput';
import { StyledAttributeBar, StyledName, StyledTextContainer } from './styles';
import { TTextBarProps } from './types';

export default class TextBar extends Component<TTextBarProps> {

  render() {
    const texts = this.props.texts;

    return (
      <StyledAttributeBar>
        <StyledName>{`${this.props.name.toUpperCase()}:`}</StyledName>
        <StyledTextContainer>
          {texts.map(text => {
            return <TextInput 
              key={text.id}
              text={text.value}
              active={this.props.activeText === text.id}
              handleChooseText={() => this.props.handleChoose('text', text)}
            />
          })}
        </StyledTextContainer>
      </StyledAttributeBar>
    )
  }
}
