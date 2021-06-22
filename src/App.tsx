import React from "react";
import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route,
} from "react-router-dom";

// import './App.css';
import "./App.scss";
import Home from "./views/Home/home";
import Dashboard from "./views/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import BusinessPage from "./views/SampleTable/page/BusinessTable";

function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <Sidebar img={logo} /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/app">
            <Dashboard/>
            </Route>
          <Route exact path="/test">
            <BusinessPage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
