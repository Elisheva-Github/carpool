import React from 'react';
import HomePage from './components/homePage';
import Instructions from './components/instructions';
import NewDrive from './components/newDrive';
import ViewTravel from './components/viewTravel';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/newDrive">
          <NewDrive />
        </Route>
        <Route path="/instructions">
          <Instructions />
        </Route>
        <Route path="/viewTravel">
          <ViewTravel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
