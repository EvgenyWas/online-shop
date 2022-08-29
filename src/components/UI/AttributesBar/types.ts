import { AttributeSet } from "../../../types/generated";
import { TAttribute, TChosenAttributeSet } from "../../../types/types";

export type TSwatchBarProps = {
  name: string;
  activeSwatch: string;
  swatches: TAttribute[];
  handleChoose: (type: "swatch", attribute: TAttribute, name: string) => void;
  inStock: boolean
};

export type TTextBarProps = {
  name: string;
  activeText: string;
  texts: TAttribute[];
  handleChoose: (type: "text", attribute: TAttribute, name: string) => void;
  inStock: boolean
};

type TType = "swatch" | "text";

export type TAttributesBarProps = {
  attributes: AttributeSet[];
  handleChoose: (type: TType, attribute: TAttribute, name: string) => void;
  chosenAttributes: TChosenAttributeSet[]
  className?: string;
  inStock: boolean
};
