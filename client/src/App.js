import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './components/Home/Home'
import Bets from './components/Bets/Bets'

function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path = "/" render = { () => <Home />} />
        <Route path = "/apuestas" render = { () => <Bets />} />
        {/* <Route path = "/tipos-apuestas" render = { () => <BetTypes />} />
        <Route path = "/quienes-somos" render = { () => <AboutUs />} />
        <Route path = "/iniciar-sesion" render = { () => <Login />} />
        <Route path = "/registrarse" render = { () => <SignUp />} /> */}
      </Switch>
    </Fragment>

  );
}

export default App;
