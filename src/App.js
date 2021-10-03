import "./App.css";
import { darkTheme } from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Card from "./CustomComponents/TaskCard";
import Navbar from "./CustomComponents/NavBar";
import CreateTaskForm from "./Components/CreateTaskForm";
import Table from "./CustomComponents/SortableTable";

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
        <Router>
          <div className={classes.root}>
            <Navbar />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch fullwidth>
              <Route path="/about">
                <CreateTaskForm />
              </Route>
              <Route path="/users">
                <Card />
              </Route>
              <Route path="/2">
                <Table />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
