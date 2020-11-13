import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"

import AuthService from './service/AuthService'

import Home from './components/Home/Home'
import Bets from './components/Bets/Bets'
import BetDetail from './components/Bets/BetDetail'
import Login from './components/Auth/Login'

function App() {


  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path = "/" render = { props => <Home {...props}/>} />
        <Route path = "/iniciar-sesion" render = { props => <Login {...props}/>} />
        <Route path = "/apuestas" render = { props => <Bets {...props}/>} />
        <Route path="/detalle-apuesta/:id" render = { props => <BetDetail  {...props}/>} />
        {/* <Route path = "/tipos-apuestas" render = { () => <BetTypes />} />
        <Route path = "/quienes-somos" render = { () => <AboutUs />} />
        <Route path = "/iniciar-sesion" render = { () => <Login />} />
        <Route path = "/registrarse" render = { () => <SignUp />} /> */}
      </Switch>
    </Fragment>

  );
}

export default App;
