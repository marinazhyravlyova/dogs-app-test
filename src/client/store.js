import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import config from '../config';
import history from './history';
import { LOG_LEVEL } from './service/logger';
import dogReducer from './dog/reducer';

export const middlewares = [routerMiddleware(history), thunkMiddleware];

const canAddLoggerMiddleware = IS_CLIENT && config.loggerLevel === LOG_LEVEL.DEBUG;

const ssrState = (IS_CLIENT && window.REDUX_DATA) || {};

if (canAddLoggerMiddleware) {
  middlewares.push(loggerMiddleware);
}

export const applicationReducer = combineReducers({
  router: routerReducer,
  dog: dogReducer,
});

export default createStore(
  applicationReducer,
  ssrState,
  applyMiddleware(...middlewares),
);
