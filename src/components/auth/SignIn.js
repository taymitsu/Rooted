import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import { auth } from '../../firebase'


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log("email", email, "password", password);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("userCredential", userCredential);
    })
    .catch((error) => {
      console.log("error", error);
    });
  }

  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
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

export default SignIn
