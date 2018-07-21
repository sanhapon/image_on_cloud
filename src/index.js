// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


/* eslint-disable import/default */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import LoginPage from './containers/LoginPage';
import DashboardPage from './containers/DashboardPage';
import PrivateRoute from './router/PrivateRoute';

import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
require('./favicon.ico');

injectTapEventPlugin();


ReactDOM.render(
    <div>
    <Router>
        <App>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
        </Switch>
        </App>
    </Router>
    </div>
    ,document.getElementById('root')
);




