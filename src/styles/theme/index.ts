export const theme = {
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1536,
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#41a9FF',
      light: '#84c5fb',
      dark: '#1b476a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#b1245a',
      light: '#db2c6f',
      dark: '#55112b',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    gray: {
      main: '#bdbdbd',
      light: '#e0e0e0',
      extraLight: '#eeeeee',
      dark: '#424242',
      background: '#f5f5f5',
      contrastText: '#fff',
      colors: [
        '#fafafa',
        '#f5f5f5',
        '#eeeeee',
        '#e0e0e0',
        '#bdbdbd',
        '#9e9e9e',
        '#757575',
        '#616161',
        '#424242',
        '#212121',
      ],
    },
  },
};

export type Theme = typeof theme;
