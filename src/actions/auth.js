import {authConstants} from '../constants';

export function loginUser(serialKey) {
    return {
        type: authConstants.LOGIN_USER,
        payload: serialKey
    }; 
}

export function logoutUser() {
    return {
        type: authConstants.LOGOUT_USER,
    };
}