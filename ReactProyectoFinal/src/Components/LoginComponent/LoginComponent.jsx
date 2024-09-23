import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Login.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const ProceedLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginMessage('');
    if (validate()) {
      try {
        const url = `http://localhost:2077/users?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
        const response = await axios.get(url);
        const data = response.data;
        if (Array.isArray(data) && data.length > 0) {
          const user = data[0];
          if (user.password === password) {
            setLoginMessage('Login successful');
            toast.success('Login successful');
            setTimeout(() => {
              navigate('/Home');
            }, 5000);
          } else {
            setLoginError('Invalid password');
            toast.error('Invalid password');
          }
        } else {
          setLoginError('Invalid username');
          toast.error('Invalid username');
        }
      } catch (error) {
        console.error(error);
        setLoginError('Login failed due to: ' + (error.response?.data?.error || error.message));
        toast.error('Login failed due to: ' + (error.response?.data?.error || error.message));
      }
    }
  };
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
  return (
    <div>
      <form onSubmit={ProceedLogin}>
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
