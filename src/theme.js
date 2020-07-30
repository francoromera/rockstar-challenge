import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
      },
    },
  },
});
