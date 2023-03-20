import { useState, useEffect } from 'react';
import { auth } from '../firebase';

function SignInConfirmation() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user && (
        <p>Welcome, {user.email}!</p>
      )}
    </div>
  );
}

export default SignInConfirmation;
