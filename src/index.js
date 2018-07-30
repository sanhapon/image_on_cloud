import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import DashboardPage from './containers/DashboardPage';
import PrivateRoute from './router/PrivateRoute';
import { RadioPhotographerListPage, RadioPhotographerPage, RadioCenterPage } from './containers/admin';
import { Provider } from 'react-redux';
import store from './store';
import history from './helper/history';

import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
require('./favicon.ico');

injectTapEventPlugin();


ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute exact path="/" component={DashboardPage} />
                        <PrivateRoute path="/dashboard" component={DashboardPage} />
                        <PrivateRoute path="/admin/radioCenterPage" component={RadioCenterPage} />
                        <PrivateRoute path="/admin/radioPhotographerPage" component={RadioPhotographerPage} />
                        <PrivateRoute path="/admin/radioPhotoGrapherListPage" component={RadioPhotographerListPage}/>

                    </Switch>
                </App>

            </Router>
        </Provider>
    </div>
    , document.getElementById('root')
);




