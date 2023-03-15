import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignInForm} />
        <Route path="/create-account" component={CreateAccount} />
      </Switch>
    </div>
  );
}

export default App;
