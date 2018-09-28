import React from 'react';
import './login.styl';
import WrappedNormalLoginForm from './LoginForm';

const Login = () => {
    return (
        <div className="login-wrap">
            <WrappedNormalLoginForm/>
        </div>
    );
};

export default Login;