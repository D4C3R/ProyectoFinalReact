import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Login.css";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import LoginCRUD from '../../../services/LoginCRUD';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate();

    const validate = () => {
        let result = true;
        if (username.trim() === '') {
            setLoginError('Please enter your username');
            toast.warning('Please enter your username');
            result = false;
        }
        if (password.trim() === '') {
            setLoginError('Please enter your password');
            toast.warning('Please enter your password');
            result = false;
        }
        return result;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');
        setLoginMessage('');

        if (validate()) {
            await LoginCRUD(username, password, navigate, setLoginError, setLoginMessage);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <label className='titulologin'>Username <span className='errmsg'>*</span></label>
                    <br />
                    <input 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label className='titulologin'>Password <span className='errmsg'>*</span></label>
                    <br />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
                <div><Link to={"/Register"}>New user? Sign up here</Link></div>
            </form>
        </div>
    );
};

export default LoginComponent;
