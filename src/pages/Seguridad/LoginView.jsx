import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { userActions } from '../../actions/user.actions'
import LoginForm from './components/LoginForm'
import { Notify } from "react-redux-notify";

function LoginView () {          
  const dispatch = useDispatch()    
  const [user, setUser] = useState({
    username:"",
    password:""
  })
    
  const handleChange = prop => event => {                         
    setUser({      
        ...user,
        [prop]: event.target.value
    })        
  } 

  const submitHandle = event => {       
    event.preventDefault()        
    dispatch(userActions.login(user))
 }
  
  return (    
    <div className="pos">
      <div className="contenedor">
      <Notify />
        <img
          alt="..."
          className="avatari"
          src={require("../../assets/img/logo.png")}
        />
          <LoginForm
           submitHandle={submitHandle}
           handleChange={handleChange}
           username={ user.username }
           password={ user.password }
          />
        </div>
    </div>
  );
}

export default LoginView