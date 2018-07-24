import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => { 
  return (
    <Route {...rest} render={(props) => (
      loggedIn === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }} />
    )} />
)};

const mapStateToProps = (state) => {
  const { loggedIn } = state.authentication;
  return {
    loggedIn: loggedIn
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));