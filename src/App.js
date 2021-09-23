import "./App.css";
import { darkTheme, lightTheme } from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Paper>
          {" "}
          <Typography variant="h1" color="secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quibusdam unde, officiis iusto aut saepe sit. Tenetur ipsum illo
            odit, sed neque, earum totam explicabo dicta id necessitatibus
            pariatur. Officiis.{" "}
          </Typography>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
