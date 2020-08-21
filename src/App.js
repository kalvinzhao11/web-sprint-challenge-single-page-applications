import React from "react";
import {Link, Route, Switch} from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Your favorite food, delivered while coding</p>
      <Link to='/'>Home</Link>
      <Link to='/pizza'>Pizza</Link>
      {/* <Link to='/'>Home</Link> */}

      <Switch>
        <Route path='/'><Home/></Route>
      </Switch>
    </>
  );
};
export default App;
