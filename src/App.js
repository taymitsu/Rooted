import './App.css';
import SignIn from './components/auth/SignIn';
import SignOutButton from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';

function App() {
  return (
    <div className="App">
      Rooted
      <SignIn />
      <SignUp />
      <AuthDetails />
      <SignOutButton />
    </div>
  );
}

export default App;
