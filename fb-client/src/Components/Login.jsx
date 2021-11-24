import { Button } from '@mui/material';
import React from 'react';
import { useStateValue } from '../context/StateProvider';
import '../css/login.css'
import { auth, provider } from './fb';


const Login = () => {




 const [{},dispatch]=useStateValue();
const signIn =() =>{
  auth.signInWithPopup(provider).then(result=>{
    var credential = result.credential;
    const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`
    dispatch({
      type:"SET_USER",
      user:{
        displayName:result.user.displayName,
        photoURL:photoURL
      }
    })




  }).catch(error =>console.log("Error while login",error))

  }
  
  return (
    <div className="login_wrapper">
    <div className="login">
      <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
      <h2>sign with facebook</h2>
    
      <Button onClick={signIn}> sign with facebook </Button>
    </div>


      
    </div>
  )
}

export default Login;
