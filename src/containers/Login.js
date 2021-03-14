import React from 'react';
import LoginContainer from '../components/LoginContainer';
import LoginFooter from '../components/LoginFooter';
import LoginNavbar from '../components/LoginNavbar';


const Login = (props) => {
    document.title = 'Login - Cleverzone test';
    return (
        <>
            <LoginNavbar/>
            <LoginContainer/>
            <LoginFooter/>
        </>
    );
}
export default Login;