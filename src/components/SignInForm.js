import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { NavLink, useHistory } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signInForm = (e) => {
    e.preventDefault();
    console.log("email", email, "password", password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        history.push("/home")
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In successful.", result);
      })
      .catch((error) => {
        console.log("Google Sign-In error.", error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signInForm}>
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
        <NavLink to="/home">
          <button type="submit">Sign In</button>
        </NavLink>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
        <NavLink to="/create-account">Create Account</NavLink>
      </form>
    </div>
  );
}

export default SignInForm;
