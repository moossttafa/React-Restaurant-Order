import React from 'react'
 import { CssBaseline } from "@material-ui/core";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
 import "./App.css";
import AddMeal from './pages/AddMeal';
import AddOrder from './pages/AddOrder';
import Reports from './pages/Reports';
function App() {
  return (
    <>
    <Router>
    <Switch>
        <Route exact path="/">
            <AddMeal />
        </Route>
        <Route path="/addOrder">
            <AddOrder />
        </Route>
        <Route  path="/reports">
            <Reports />
        </Route>
      </Switch>
    </Router>
       
    </>
  );
}

export default App;
