import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';
import promiseMiddleware from 'redux-promise-middleware';

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleware, promiseMiddleware, createLogger()))
);

export default store;