import React, { useState, useEffect } from 'react';
import LogIn from './logIn';
import SignIn from './signIn';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const [displayLogIn, setDisplayLogIn] = useState(false);
    const [displaySignIn, setDisplaySignIn] = useState(false);
    const history = useHistory();

    useEffect(() => {
      auth.onAuthStateChanged(user => {
          if (user) {
              history.push('/')
          }
      })
    })
  
    const toggle = (e) => {
      if (e.target.name === 'log') {
        if (displaySignIn === true) {
          setDisplaySignIn(false);
          setDisplayLogIn(true);
        }
        setDisplayLogIn(!displayLogIn);
      } else {
        if (displayLogIn === true) {
          setDisplayLogIn(false);
          setDisplaySignIn(true);
        }
        setDisplaySignIn(!displaySignIn);
      }
    }
    return (
        <div className="app">
          <div className="log-in-title">
              <h1>
                  Welcome
                  <br />
                  to your
                  <br />
                  Cookbook
              </h1>
          </div>
          <div className="link">
              <LogIn>
                <button className='btn btn-light' onClick={toggle}>Sign In</button>
              </LogIn>
              <SignIn display={displaySignIn}>
                <button className='btn btn-light' onClick={toggle}>Log In</button>
              </SignIn>
          </div>
        </div>
    )
}