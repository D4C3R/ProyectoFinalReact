import React, { useState } from 'react';
import "../../styles/Register.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import RegisterCRUD from '../../../services/RegisterCRUD'

const RegisterComponent = () => {
    const [username, usernamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [telephone, telephonechange] = useState("");
    const navigate = useNavigate();

    const validRegister = () => {
        let correctform = true;
        let errormessage = 'Please enter a value in ';
        if (username === null || username === '') {
            correctform = false;
            errormessage += 'username ';
        }
        if (password === null || password === '') {
            correctform = false;
            errormessage += 'password ';
        }
        if (telephone === null || telephone === '') {
            correctform = false;
            errormessage += 'telephone ';
        }
        if (!correctform) {
            toast.warning(errormessage);
        }
        return correctform;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let allData = { username, password, telephone };
        if (validRegister()) {
            RegisterCRUD(allData, navigate); 
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Register</h1>
                    </div>
                    <div>
                        <label className='tituloregister'>Username <span className='errmsg'>*</span></label>
                        <br />
                        <input type="text" value={username} onChange={e => usernamechange(e.target.value)} />
                    </div>
                    <div>
                        <label className='tituloregister'>Password <span className='errmsg'>*</span></label>
                        <br />
                        <input type="password" value={password} onChange={e => passwordchange(e.target.value)} />
                    </div>
                    <div>
                        <label className='tituloregister'>Telephone <span className='errmsg'>*</span></label>
                        <br />
                        <input type="tel" value={telephone} onChange={e => telephonechange(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit">Sign up</button>
                    </div>
                </form>
                <div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default RegisterComponent;
