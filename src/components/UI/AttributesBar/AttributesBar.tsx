import { Component } from "react";
import { StyledAttributesBar } from "./styles";
import SwatchBar from "./SwatchBar";
import TextBar from "./TextBar";
import { TAttributesBarProps } from "./types";

class AttributesBar extends Component<TAttributesBarProps> {
  render() {
    const { attributes, chosenText, chosenSwatch, handleChoose, className, inStock } =
      this.props;
    const swatch = attributes?.find(
      (attribute: any) => attribute?.type === "swatch"
    );
    const text = attributes?.find(
      (attribute: any) => attribute?.type === "text"
    );

    return (
      <StyledAttributesBar className={className}>
        {text && (
          <TextBar
            name={text.name}
            activeText={chosenText?.id ?? text.items[0].id}
            texts={text.items}
            handleChoose={handleChoose}
            inStock={inStock}
          />
        )}
        {swatch && (
          <SwatchBar
            name={swatch.name}
            activeSwatch={chosenSwatch?.id ?? swatch.items[0].id}
            swatches={swatch.items}
            handleChoose={handleChoose}
            inStock={inStock}
          />
        )}
      </StyledAttributesBar>
    );
  }
}

export default AttributesBar;
