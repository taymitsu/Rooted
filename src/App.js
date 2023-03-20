import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/sign-in" component={SignInForm} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
