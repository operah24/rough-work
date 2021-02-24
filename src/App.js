import React from 'react';
import Nav from '../src/components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/login'} component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
