import React from 'react';
import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Home from './views/Home/home';
import Dashboard from './views/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthRoute from './layout/AuthLayout';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            {<Redirect to="/auth" />}
          </Route>
          <Route path="/auth" component={AuthRoute} />
          <Route path="/app" component={Dashboard} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
