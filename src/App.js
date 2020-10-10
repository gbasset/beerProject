import React, { useState, useEffect, useContext } from 'react';
import './App.css';

import BeerContainer from './components/Beer/BeerContainer';
import ContextProvider from './Context/Context'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import BeerItemContainer from './components/Beer/BeerItemContainer';
import FavoritesContainer from './components/Favory/FavoritesContainer';
function App() {

  return (
    <ContextProvider >
      <Router
      // forceRefresh={true}
      >
        {/* <div className='App'> */}
        <Header />
        <Switch>
          <Route exact path="/" component={BeerContainer} />
          <Route exact path="/beer/:slug:price" component={BeerItemContainer} />
          <Route exact path="/favorites" component={FavoritesContainer} />
        </Switch>

        {/* </div> */}
      </Router>
    </ContextProvider>
  );
}

export default App;
