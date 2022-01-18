import React from 'react';
import '../CSS/Login.css';
import { Button } from '@material-ui/core';
import {auth, signInWithPopup,provider} from '../FireBase/firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [state,dispatch]=useStateValue();

    const signIn=()=>{
        signInWithPopup(auth,provider) 
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result.user)
        }).catch(error=>alert(error)) 
    }

    return (
        <div className='login'>
            <div className="login__logo">

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png" 
                alt="Facebook Logo" />
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/250px-Facebook_Logo_%282019%29.svg.png"
                alt="Facebook Logo" width="150px" />

            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>
            
        </div>
    )
}

export default Login;
