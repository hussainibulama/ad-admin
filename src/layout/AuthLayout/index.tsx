import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LockScreen from '../../views/Auth/LockScreen';
import Login from '../../views/Auth/Login';
import NewPassword from '../../views/Auth/NewPassword';
import ResetPassword from '../../views/Auth/ResetPassword';     

const AuthRoute = () => {
  return (
    <Switch>
      <Route exact path="/auth">
        {<Redirect to="/auth/login" />}
      </Route>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/lock" component={LockScreen} />
      <Route exact path="/auth/reset" component={ResetPassword} />
      <Route exact path="/new-password" component={NewPassword} />
    </Switch>
  );
};

export default AuthRoute;
