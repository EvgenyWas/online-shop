export interface ITheme {
  colors: {
    green: string;
    grey: string;
    acceptGrey: string;
    backgroundGrey: string;
    primaryText: string;
    background: string;
    acceptBlack: string;
  };

  fonts: {
    primary: string;
    secondary: string;
    tertiary: string;
  };

  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };

  lineHeights: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    percentM: string;
    percentL: string;
  };

  fontWeights: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
}
