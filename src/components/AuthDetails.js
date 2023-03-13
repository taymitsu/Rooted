import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const AuthDetails = () => {
  const [authUser, loading] = useAuthState(auth);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : authUser ? (
        <p>{`Welcome, ${authUser.email}`}</p>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
