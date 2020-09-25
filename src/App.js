import React from 'react';
import Home from './views/Home'
import List from './views/List'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Route path="/home" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Redirect exact to="/home" from="/"></Redirect>
      </Router>
      
  );
}

export default App;
