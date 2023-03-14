import React from 'react';
import { auth } from '../../firebase'

const SignOutButton = () => {
  const handleSignOut = () => {
    auth.signOut()
    .then(() => console.log('User signed out'))
    .catch((error) => console.log('Error signing out:', error));
};
  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOutButton;