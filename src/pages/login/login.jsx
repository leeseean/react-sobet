import React from 'react';
import './login.styl';
import WrappedNormalLoginForm from './loginForm.jsx';

const Login = () => {
    return (
        <div className="login-wrap">
            <WrappedNormalLoginForm/>
        </div>
    );
};

export default Login;