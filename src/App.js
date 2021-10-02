import "./App.css";
import { darkTheme, lightTheme } from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Card from "./Components/CreateTaskForm";
import { makeStyles } from "@mui/styles";

import Navbar from "./CustomComponents/NavBar";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <div className={classes.root}>
          <Navbar />

          <div>
            <Card />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
