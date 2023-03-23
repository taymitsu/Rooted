import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import './CreateAccount.css';


function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const CreateAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      history.push('/sign-in'); // redirect to sign-in page, after account created
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className='create-account-container'>
      <form onSubmit={CreateAccount}>
        <h1>Lay down some Roots with us</h1> <h1>Create your account today</h1>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
      
        <div className="form-group">
          <label>Password</label>
          <input 
          type="password" 
          value={password} 
          placeholder="Enter email"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount;
