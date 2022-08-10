import { TAttribute } from "../../../types/types";

export type TSwatchBarProps = {
    name: string,
    activeSwatch: string,
    swatches: TAttribute[],
    handleChoose: (type: 'swatch', attribute: TAttribute) => void,
};

export type TTextBarProps = {
    name: string,
    activeText: string,
    texts: TAttribute[]
    handleChoose: (type: 'text', attribute: TAttribute) => void,
};

export type TType = 'swatch' | 'text';

export type TAttributesBarProps = {
    attributes: Array<{
        id: string,
        name: string,
        type: string,
        items: TAttribute[]
    }>,
    handleChoose: (type: TType, attribute: TAttribute) => void,
    chosenSwatch: TAttribute | null,
    chosenText: TAttribute | null,
    className?: string
}