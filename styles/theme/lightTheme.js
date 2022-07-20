import { createTheme } from '@mui/material/styles';
import Fonts from '../fonts';
import { bodyStyled } from '../globals';
import { normalizeCss } from "../normalize";


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    brandPrimary: {
      light: "#13F287",
      main: "#13F287",
      dark: "#13F287",
    },
    brandPrimaryTint100: {
      light: "#93FFCB",
      main: "#93FFCB",
      dark: "#93FFCB",
      contrastText: "#fff",
    },
    brandSecondary: {
      light: "#FF6C3E",
      main: "#FF6C3E",
      dark: "#FF6C3E",
      contrastText: "#000",
    },
    brandTertiary: {
      light: "#633DFF",
      main: "#633DFF",
      dark: "#633DFF",
      contrastText: "#000",
    },

  },
  typography: {
    test: {},
    h1: { fontSize: '96px', fontFamily: "'Inter',sans-serif", fontWeight: 800 },
    h2: { fontSize: '88px', fontFamily: "'Inter',sans-serif", fontWeight: 700 },
    h3: { fontSize: '80px', fontFamily: "'Inter',sans-serif", fontWeight: 600 },
    h4: { fontSize: '72px', fontFamily: "'Inter',sans-serif", fontWeight: 500 },
    h5: { fontSize: '64px', fontFamily: "'Inter',sans-serif", fontWeight: 500 },
    h6: { fontSize: '56px', fontFamily: "'Inter',sans-serif", fontWeight: 500 },
    subtitle1: { fontSize: '60px', fontFamily: "'Inter',sans-serif", fontWeight: 600 },
    subtitle2: { fontSize: '48px', fontFamily: "'Inter',sans-serif", fontWeight: 500 },
    body1: { fontSize: '18px', fontFamily: "'Inter',sans-serif", fontWeight: 200 },
    body2: { fontSize: '24px', fontFamily: "'Inter',sans-serif", fontWeight: 100 },
    button: { fontSize: '22px', fontFamily: "'Inter',sans-serif", fontWeight: 400 },
    caption: { fontSize: '16px', fontFamily: "'Inter',sans-serif", fontWeight: 100 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `${normalizeCss} ${bodyStyled} ${Fonts}
      body {
        // background: rgb(5,3,72);
        // background: linear-gradient(90deg, rgb(5 3 72) 0%, rgb(112 9 121 / 23%) 64%, rgb(152 244 246) 100%);
        // background: linear-gradient(90deg, rgba(5,3,72,1) 0%, rgba(112,9,121,1) 64%, rgba(152,244,246,1) 100%);
      }
      `,
    },
  },
});

export default lightTheme;
