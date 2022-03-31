/* eslint-ignore @typescript-eslint/no-empty-interface */
import { createTheme } from '@mui/material/styles';

const themeSettings = {
  MuiCssBaseline: {
    styleOverrides: {
      '*, *::before, *::after': {
        transition: 'none !important',
        animation: 'none !important',
      },
    },
  },
  palette: {
    common: {
      black: "rgba(30, 30, 30, 1)",
      white: "#fff"
    },
    background: {
      paper: "rgba(255, 255, 255, 1)",
      default: "rgba(255, 255, 255, 1)"
    },
    primary: {
      light: "#7bdcb5",
      main: "#00a65c",
      dark: "#314f38",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(255, 252, 229, 1)",
      main: "#f0f2f3",
      dark: "#dadfe2",
      contrastText: "#404040"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(17, 17, 17, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "'Manrope', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 700,
      fontSize: "2.441rem",
      lineHeight: "3.5rem",
      letterSpacing: "-0.01562em"
    },
    h2: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 700,
      fontSize: "1.953rem",
      lineHeight: "2rem",
      letterSpacing: "-0.01562em"
    },
    h3: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 700,
      fontSize: "1.563rem",
      lineHeight: "2rem",
      letterSpacing: "-0.01562em"
    },
    h4: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: "2rem",
      letterSpacing: "-0.01562em"
    },
    h5: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: "2rem",
      letterSpacing: "-0.01562em",
      color: "#5b5654"
    },
    h6: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: "3.5rem",
      letterSpacing: "-0.01562em"
    },
    body1: {
      color: "#000"
    },
    subtitle1: {
      fontWeight: 700,
      color: "rgba(206, 18, 45, 1)"
    }
  },
  properties: {
    drawerWidth: '240px',
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof themeSettings]: typeof themeSettings[Key]
}

declare module '@mui/material/styles' {
  type Theme = CustomTheme
  type ThemeOptions = CustomTheme
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

const theme = createTheme(themeSettings);


export default theme
