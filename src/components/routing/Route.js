import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Alert from './layout/Alert';

const Routes = (props) => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </section>
  );
};
export default Route;
