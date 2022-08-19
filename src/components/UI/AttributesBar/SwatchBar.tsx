import { Component } from "react";
import SwatchInput from "../Inputs/SwatchInput";
import {
  StyledAttributeBar,
  StyledName,
  StyledSwatchContainer,
} from "./styles";
import { TSwatchBarProps } from "./types";

export default class SwatchBar extends Component<TSwatchBarProps> {
  render() {
    const { swatches, activeSwatch, name, handleChoose } = this.props;

    return (
      <StyledAttributeBar>
        <StyledName>{`${name.toUpperCase()}:`}</StyledName>
        <StyledSwatchContainer>
          {swatches.map((swatch) => {
            return (
              <SwatchInput
                key={swatch.id}
                color={swatch.value}
                active={activeSwatch === swatch.id}
                handleChooseSwatch={() => handleChoose("swatch", swatch)}
              />
            );
          })}
        </StyledSwatchContainer>
      </StyledAttributeBar>
    );
  }
}
