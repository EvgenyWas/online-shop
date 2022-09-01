import { Component } from "react";
import { TAttribute } from "../../../types/types";
import { StyledAttributesBar } from "./styles";
import SwatchBar from "./SwatchBar";
import TextBar from "./TextBar";
import { TAttributesBarProps } from "./types";

class AttributesBar extends Component<TAttributesBarProps> {
  constructor(props: TAttributesBarProps) {
    super(props);
    this.getAttributes = this.getAttributes.bind(this);
  }

  getAttributes() {
    const { attributes, chosenAttributes, handleChoose, inStock } = this.props;
    const gottenAttributes = attributes?.map((attribute, index) => {
      const { name, items, id } = attribute;
      let chosenAttribute = undefined;
      const conditionAttributesMatch =
        chosenAttributes.length === attributes.length;
      if (chosenAttributes && conditionAttributesMatch) {
        chosenAttribute = chosenAttributes[index].chosenAttribute;
      }

      const activeText = chosenAttribute?.id ?? items![0]?.id;

      return attribute.type === "text" ? (
        <TextBar
          key={id + activeText}
          name={name as string}
          activeText={activeText as string}
          texts={items as TAttribute[]}
          handleChoose={handleChoose}
          inStock={inStock}
        />
      ) : (
        <SwatchBar
          key={id + activeText}
          name={name as string}
          activeSwatch={activeText as string}
          swatches={items as TAttribute[]}
          handleChoose={handleChoose}
          inStock={inStock}
        />
      );
    });

    return gottenAttributes;
  }

  render() {
    const { className } = this.props;

    return (
      <StyledAttributesBar className={className}>
        {this.getAttributes()}
      </StyledAttributesBar>
    );
  }
}

export default AttributesBar;
