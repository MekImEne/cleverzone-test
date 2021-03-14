import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
);

export default store;