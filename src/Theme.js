import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    type: "light",
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
    type: "dark",
    primary: {
      light: "#BB86FC",
      main: "#BB86FC",
      dark: "#BB86FC",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#03DAC6",
      contrastText: "#fff",
    },
    background: {
      paper: "#0D1B2A",
      default: "#0D1B2A",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
});

export { darkTheme, lightTheme };
