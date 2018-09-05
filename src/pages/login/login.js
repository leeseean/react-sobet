import React from 'react';
import './login.css';
import WrappedNormalLoginForm from './loginForm';

const Login = () => {
    return (
        <div className="login-wrap">
            <WrappedNormalLoginForm/>
        </div>
    );
};

export default Login;