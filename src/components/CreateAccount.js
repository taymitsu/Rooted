import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

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
        <h1>Create your account</h1>
        <input 
          type="email" 
          value={email} 
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input 
          type="password" 
          value={password} 
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount;
