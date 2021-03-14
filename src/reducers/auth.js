import {authConstants} from '../constants';
import initialState from './initialState';

const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case `${authConstants.LOGIN_USER}_REQUEST`:
            return {
                ...state,
                authenticating: true
            };
        case `${authConstants.LOGIN_USER}_FULFILLED`:
            return {
                authenticated: true,
                authenticating: false,
                token: action.payload,
            };
        case `${authConstants.LOGOUT_USER}_FULFILLED`: 
            return {
                ...initialState.auth
            };
        default:
            return state;
    }
}

export default authReducer;