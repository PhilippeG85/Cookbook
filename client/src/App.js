import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/user_LogIn/home';
import Cookbook from './components/cookbook';
import AddRecipe from "./components/new/addRecipe";
import UserRecipes from './components/index/userRecipes';
import UpdateRecipe from './components/update/updateRecipe';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/log-in">
          <Home />
        </Route>
        <Route path="/new-recipe">
          <Cookbook>
            <AddRecipe />
          </Cookbook>
        </Route>
        <Route path="/update-recipe">
          <Cookbook>
            <UpdateRecipe />
          </Cookbook>
        </Route>
        <Route exact path="/" >
          <Cookbook>
            <UserRecipes />
          </Cookbook>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
