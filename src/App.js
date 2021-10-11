import "./App.css";
import { darkTheme } from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Card from "./CustomComponents/TaskCard";
import Navbar from "./CustomComponents/NavBar";
import CreateTaskForm from "./Components/CreateTaskForm";
import Table from "./CustomComponents/SortableTable";
import SideDrawerTask from "./Components/SideDrawerTask";
import DashboardCard from "./CustomComponents/DashboardCard";
import BarChart from "./CustomComponents/BarChart";
import PieChart from "./CustomComponents/PieChart";
import CalenderView from "./Components/CalenderView";

//All pages for routes
import Dashboard from "./Pages/Dashboard";
import NewSubject from "./Components/CreateNewSubject";
import ErrorPage from "./Pages/404";

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingRight: "0px",
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
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/newsub">
                <NewSubject />
              </Route>
              <Route path="/newsub">
                <Table />
              </Route>
              <Route path="/cardDets">
                <SideDrawerTask />
              </Route>
              <Route path="/DashboardCard">
                <DashboardCard />
              </Route>
              <Route path="/BarChart">
                <BarChart />
              </Route>
              <Route path="/PieChart">
                <PieChart />
              </Route>

              <Route path="/calender">
                <div style={{ width: "80%" }}>
                  <CalenderView />
                </div>
              </Route>

              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
