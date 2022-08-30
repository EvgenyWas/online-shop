import { Component } from "react";
import { getWordFromCapitalLetter } from "../../../utils/utils";
import SwatchInput from "../Inputs/SwatchInput";
import {
  StyledAttributeBar,
  StyledName,
  StyledSwatchContainer,
} from "./styles";
import { TSwatchBarProps } from "./types";

export default class SwatchBar extends Component<TSwatchBarProps> {
  render() {
    const { swatches, activeSwatch, name, handleChoose, inStock } = this.props;

    return (
      <StyledAttributeBar>
        <StyledName>{`${getWordFromCapitalLetter(name)}:`}</StyledName>
        <StyledSwatchContainer>
          {swatches.map((swatch) => {
            return (
              <SwatchInput
                key={swatch.id}
                color={swatch.value}
                active={activeSwatch === swatch.id}
                handleChooseSwatch={() => handleChoose("swatch", swatch, name)}
                inStock={inStock}
              />
            );
          })}
        </StyledSwatchContainer>
      </StyledAttributeBar>
    );
  }
}
