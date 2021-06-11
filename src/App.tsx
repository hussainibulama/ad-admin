import React from "react";
import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route,
} from "react-router-dom";

// import './App.css';
import "./App.scss";
import Home from "./views/Home/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <Sidebar img={logo} /> */}
        <Switch> 
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
