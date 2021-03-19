import React, { useEffect } from 'react';
// import { UserContext } from '../logInContext';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';

export default function Cookbook() {
    // const user = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/log-in')
            }
        })
    })

    const handleClick = (e) => {
        e.preventDefault();
        auth.signOut()
            .then(res => history.push('/log-in'))
    }
    return (
        <div className="home-cookbook">
            <div className="cookbook-index">
                <h3>Your<br />Cookbook</h3>
                <div>
                    <button className="btn btn-light">New recipe</button>
                </div>
            </div>
            <div>
                <button className="btn btn-danger sign-out-btn" onClick={handleClick}>Sign out</button>
            </div>
        </div>
    );
}