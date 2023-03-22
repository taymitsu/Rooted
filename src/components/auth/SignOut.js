import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase'

const SignOutButton = () => {
  const history = useHistory();
  const handleSignOut = () => {
    auth.signOut()
    //re-route to sign in page after user clicks signoutbutton
    .then(() => {
      history.push('/sign-in')
    })
    //.then(() => console.log('User signed out'))
    //.catch((error) => console.log('Error signing out:', error));
};
  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOutButton;