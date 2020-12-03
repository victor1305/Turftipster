import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"

import AuthService from './service/AuthService'

import Home from './components/Home/Home'
import Bets from './components/Bets/Bets'
import BetDetail from './components/Bets/BetDetail'
import Login from './components/Auth/Login'
//import UserForm from './components/Auth/UserForm'
import HorseRaces from './components/HorseRaces/HorseRaces'
import Stats from './components/Stats/Stats';
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'

function App(props) {

  const [ userState, updateUserState ] = useState({
    loggedInUser: null
  })

  const authService = new AuthService()

  const { loggedInUser } = userState

  useEffect (() => {
    
    fetchUser()
    // eslint-disable-next-line
  }, [props])

  const fetchUser = () => {
    authService
      .isLoggedIn()
      .then(response => 
        loggedInUser === null && updateUserState({
          loggedInUser: response.data
        }))
      .catch(err => console.log(err.response.data.message))
  }

  return (
    <Fragment>
      <NavBar {...userState} {...props}/>
      <Switch>
        <Route exact path = "/" render = { props => <Home {...userState} {...props}/>} />
        <Route path = "/iniciar-sesion-turftipster" render = { props => <Login fetchUser = {fetchUser} {...props}/>} />
        {/* <Route path = "/registro" render = { props => <UserForm {...props} fetchUser = {fetchUser}/>} /> */}
        <Route path = "/apuestas" render = { props => <Bets {...userState} {...props}/>} />
        <Route path = "/detalle-apuesta/:id" render = { props => <BetDetail {...userState} {...props}/>} />
        <Route path = "/carreras-de-caballos" render = { () => <HorseRaces />} />
        <Route path = "/stats" render = { props => <Stats {...props}/>} />
        <Route path = "/quienes-somos" render = { () => <AboutUs />} />
      </Switch>
      <Footer />
    </Fragment>

  );
}

export default App;
