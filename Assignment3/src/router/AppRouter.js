import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Clients from '../components/ClientList';
import Register from '../components/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/clients" component={Clients} />
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AppRouter);