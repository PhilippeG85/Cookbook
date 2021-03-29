import React, { useEffect, useContext } from 'react';
import { UserContext } from '../logInContext';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';


export default function Cookbook(props) {
    const userName = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/log-in')
            }
        });
    })

    const handleClick = (e) => {
        e.preventDefault();
        auth.signOut()
            .then(res => history.push('/log-in'))
    }

    const name = userName ? userName.email : '';

    return (
        <div className="home-cookbook">
            <div className="cookbook-index">
                <h3>Your<br />Cookbook</h3>
                <h6>{name}</h6>
                <div className='left-index'>
                    <Link to='/new-recipe' className="">New recipe</Link>
                    <Link to='/'>All recipes</Link>
                    <Link to='' className="sign-out-btn" onClick={handleClick}>Sign out</Link>
                </div>
            </div>
            <div style={{ width: "75%" }}>
                {props.children}
            </div>
        </div>
    );
}