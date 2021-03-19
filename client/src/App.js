import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Cookbook from './components/cookbook';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/log-in">
          <Home />
        </Route>
        <Route exact path="/" >
          <Cookbook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
