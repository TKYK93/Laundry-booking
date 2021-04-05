import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewBooking from './NewBooking/NewBooking';

const App = () => {
  return (
      <Router>
            <div className="App">
      <Switch>

        <Route exact path={"/"}>
          <h1>Home</h1>
        </Route>
        <Route path={"/newBooking"}>
          <h3>NewBooking</h3>
        </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
