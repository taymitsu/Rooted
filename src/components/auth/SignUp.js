import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import { auth } from '../../firebase'


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className='sign-up-container'>
      <form onSubmit={signUp}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignUp
