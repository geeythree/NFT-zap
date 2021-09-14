import { createMuiTheme} from '@material-ui/core';

export const theme = createMuiTheme({
    typography: {
        fontFamily: 'Scada',
        allVariants: {
            color: "#fff"
          },
    },
  palette: {
      background : {
          default : "0f0f0f",
      },
    primary: {
      main: "#0f0f0f"
    },
    secondary: {
      main: "#E1701A"
    }
  },
  overrides: {
    MuiButton: {
      text: {
        background: 'linear-gradient(45deg, #E1701A 10%, #FF8E53 100%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .2)',
        color: 'white',
        height: 40,
        padding: '0 35px',
      },
    },
  },
});