import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

export default function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const {display} = props;

    const style = {
        display: display ? 'block': 'none'
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                return history.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className='sign-in' style={style}>
            <h1>Sign In</h1>
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <input type='text' placeholder='Email' name='email' onChange={handleChange} value={email} />
                <input type='password' placeholder='Password' onChange={handleChange} value={password} />
                <input className="btn btn-success" type='submit' value='Sign-in' />
            </form>
            {props.children}
        </div>
    );
};