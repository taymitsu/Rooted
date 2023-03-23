import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/sign-in" component={SignInForm} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/test" component={TestComponent} />
          <Route exact path="/test" component={TestComponent} />
          <Route exact path="/test" component={TestComponent} />
          <Route exact path="/test" component={TestComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
