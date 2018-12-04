import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import store from './store';
import history from './history';
import routes from '../routes';

const Routes = withRouter(connect()(() => (
  <Switch>
    {(routes || []).map((route, key) => {
      switch (route.type) {
        case 'route': {
          return (
            <Route
              key={key}
              path={route.path}
              component={route.component}
            />
          );
        }
        case 'redirect': {
          return (
            <Redirect
              from={route.from}
              to={route.to}
            />
          );
        }

        default:
          return null;
      }
    })}
  </Switch>
)));

ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
