import { blue, green, grey, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 30,
    },
  },
  palette: {
    primary: {
      main: blue[500],
      light: blue[600],
      dark: blue[700],
    },
    secondary: {
      main: blue[500],
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
