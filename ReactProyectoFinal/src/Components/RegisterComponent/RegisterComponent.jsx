import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Register.css"
import axios from 'axios';
import { toast } from 'react-toastify';

const RegisterComponent = () => {

    const [username, usernamechange] = useState("")
    const [password, passwordchange] = useState("")
    const [telephone, telephonechange] = useState("")
    const navigate = useNavigate();
    const validRegister = () => {
        let correctform = true;
        let errormessage = 'Please enter an value in ';
        if (username === null || username === '') {
            correctform = false
            errormessage += ' username ';
        }
        if (password === null || password === '') {
            correctform = false
            errormessage += ' password ';
        }
        if (telephone === null || telephone === '') {
            correctform = false
            errormessage += ' telephone ';
        }
        if (!correctform) {
            toast.warning(errormessage)
        }
        return correctform;
    }

    const handleSubmit = (e) => {

            e.preventDefault();
            let allData = { username, password, telephone }
            console.log(allData)
        if (validRegister()) {
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(allData)
            }).then((res) => {
                toast.success('Register complete')
                setTimeout(() => {
                    navigate('/Login');
                  }, 5000);
            }).catch((err) => {
                toast.error('Register failed due to' + err.message)
            })
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Register</h1>
                    </div>
                    <div>
                        <label>Username <span className='errmsg'>*</span></label>
                        <br />
                        <input type="text" value={username} onChange={e => usernamechange(e.target.value)} />
                    </div>
                    <div>
                        <label>Password <span className='errmsg'>*</span></label>
                        <br />
                        <input type="password" value={password} onChange={e => passwordchange(e.target.value)} />
                    </div>
                    <div>
                        <label>Telephone <span className='errmsg'>*</span></label>
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
        </div>
    )
}
export default RegisterComponent