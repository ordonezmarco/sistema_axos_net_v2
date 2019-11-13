import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './views/Home'
import Login from './views/Login'


function App() {
  return (
<Router>
      <div>
        <Switch>
            <Route exact path ="/" >
              <Login />
            </Route>
            <Route path="/home" >
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
/*
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
*/
export default App;
