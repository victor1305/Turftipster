import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom"

import Home from './components/Home/Home'
import Bets from './components/Bets/Bets'
import BetDetail from './components/Bets/BetDetail'
import Clients from './components/Client/Clients'
import ClientDetail from './components/Client/ClientDetail'


function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path = "/index" render = { () => <Home />} />
        <Route path = "/apuestas" render = { props => <Bets {...props}/>} />
        <Route path = "/clientes" render = { props => <Clients {...props}/>} />
        <Route path = "/detalle-apuesta/:id" render = { props => <BetDetail  {...props}/>} />
        <Route path = "/detalle-cliente/:id" render = { props => <ClientDetail  {...props}/>} />
      </Switch>
    </Fragment>
  );
}

export default App;
