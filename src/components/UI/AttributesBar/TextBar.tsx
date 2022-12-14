import { Component } from "react";
import { getWordFromCapitalLetter } from "../../../utils/utils";
import TextInput from "../Inputs/TextInput";
import { StyledAttributeBar, StyledName, StyledTextContainer } from "./styles";
import { TTextBarProps } from "./types";

export default class TextBar extends Component<TTextBarProps> {
  render() {
    const { texts, name, activeText, handleChoose, inStock } = this.props;

    return (
      <StyledAttributeBar>
        <StyledName>{`${getWordFromCapitalLetter(name)}:`}</StyledName>
        <StyledTextContainer>
          {texts.map((text) => {
            return (
              <TextInput
                key={text.id}
                text={text.value}
                active={activeText === text.id}
                handleChooseText={() => handleChoose("text", text, name)}
                inStock={inStock}
              />
            );
          })}
        </StyledTextContainer>
      </StyledAttributeBar>
    );
  }
}
