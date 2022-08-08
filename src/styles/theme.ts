import { ITheme } from '../interfaces/styled' 

export const baseTheme: ITheme = {
    colors: {
        green: '#5ECE7B',
        grey: '#8D8F9A',
        acceptGrey: '#EEEEEE',
        primaryText: '#1D1F22',
        background: '#FFFFFF',
        acceptBlack: '#292929',
    },

    fonts: {
        primary: "'Raleway', sans-serif",
        secondary: "Roboto Condensed",
        tertiary: "'Source Sans Pro', sans-serif"
    },

    fontSizes: {
        xs: '14px',
        sm: '16px',
        md: '18px',
        lg: '24px',
        xl: '30px',
        xxl: '32px',
        xxxl: '40px',
    },
    
    lineHeights: {
        xs: '16px',
        sm: '18px',
        md: '22px',
        lg: '28px',
        xl: '32px',
        xxl: '40px',
        percentM: '120%',
        percentL: '160%',
    },

    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    media: {
        extraLarge: '1200px',
        large: '992px',
        medium: '768px', 
        small: '576px',
    },
}