import React, { useState, useEffect, useContext } from 'react';
import './App.css';

import CartContainer from './components/Cart/CartContainer'
import BeerContainer from './components/Beer/BeerContainer';
import ContextProvider from './Context/Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
function App() {
  // const [cartIsOppen, setCartIsOppen] = useState(false)

  // const seeCart = () => {
  //   setCartIsOppen(!cartIsOppen)
  // }

  return (
    <ContextProvider >
      <Router
        forceRefresh={true}>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path="/" component={BeerContainer} />
            {/* <Route exact path="/top-streams" component={TopStreams} />
        <Route exact path="/live/:slug" component={Live} />
        <Route exact path="/game/:slug" component={GamesStreams} />
        <Route exact path="/resultats/:slug" component={Resultats} />
        <Route exact path="/resultats" component={Erreur} /> */}
          </Switch>
          {/* <h1>In Beer We Trust</h1>
        {cartIsOppen &&
          <CartContainer />} */}
          {/* <button onClick={seeCart}>See Cart</button> */}
          {/* <BeerContainer /> */}

        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
