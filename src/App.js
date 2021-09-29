import "./App.css";
import { darkTheme, lightTheme } from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

import Navbar from "./CustomComponents/NavBar";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <Navbar />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
