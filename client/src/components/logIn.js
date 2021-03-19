import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

export default function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                const user = res.user;
                console.log(user.email);
                return history.push('/')
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className='log-in'>
            <h1>Log In</h1>
            <form className="log-in-form" onSubmit={handleSubmit}>
                <input type='text' placeholder='Email' name='email' onChange={handleChange} value={email} />
                <input type='password' placeholder='Password' onChange={handleChange} value={password} />
                <input className="btn btn-success" type='submit' value="Log in" />
            </form>
            {props.children}
        </div>
    );
};