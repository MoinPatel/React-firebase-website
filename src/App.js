import React from 'react';
import Home from './Home';
import { Route, Switch } from "react-router";
import About from './Pages/About';
import Contactpage from './Pages/Contact';
import Service from './Pages/Services';
import Error from './Pages/Error';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contactpage}></Route>
        <Route path="/service" component={Service}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  )
}

export default App
