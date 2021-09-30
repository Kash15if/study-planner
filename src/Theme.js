import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#757ce8",
      main: "#42a5f5",
      dark: "#BB86FC",
      contrastText: "#fff",
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
      light: "#BB86FC",
      main: "#BB86FC",
      dark: "#BB86FC",
      contrastText: "#BB86FC",
    },
    secondary: {
      light: "#03DAC6",
      main: "#03DAC6",
      dark: "#03DAC6",
      contrastText: "#03DAC6",
    },
    background: {
      paper: "#0D1B2A",
      default: "#0D1B2A",
      contrastText: "#BB86FC",
    },
    text: {
      primary: "#BB86FC",
      secondary: "#03DAC6",
      disabled: "red",
      icon: "#BB86FC",
      divider: "#03DAC6",
    },
    action: {
      active: "#fff",
    },
  },
});

export { darkTheme, lightTheme };
