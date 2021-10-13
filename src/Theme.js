import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#757ce8",
      main: "#42a5f5",
      dark: "#BB86FC",
      contrastText: "#BB86FC",
    },
    secondary: {
      light: "#ff7961",
      main: "#42a5f5",
      dark: "#03DAC6",
      contrastText: "#000",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#0D1B2A",
      main: "#BB86FC",
      dark: "#BB86FC",
      //to show value on button and all
      contrastText: "#0D1B2A",
    },
    secondary: {
      light: "#0D1B2A",
      main: "#03DAC6",
      dark: "#03DAC6",
      contrastText: "#03DAC6",
    },
    background: {
      paper: "#0D1B2A",
      default: "#0D1B2A",
    },
    text: {
      primary: "#BB86FC",
      secondary: "#BB86FC",
      disabled: "red",
      icon: "#BB86FC",
      divider: "#03DAC6",
    },
    action: {
      active: "#BB86FC",
    },
    overrides: {
      MUIDataTable: {
        responsiveStacked: {
          maxHeight: "none",
          overflowX: "auto",
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
