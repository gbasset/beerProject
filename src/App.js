import React, { useState, useEffect, useContext } from 'react';
import './App.css';

import CartContainer from './components/Cart/CartContainer'
import BeerContainer from './components/Beer/BeerContainer';
import ContextProvider from './Context/Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import BeerItemContainer from './components/Beer/BeerItemContainer';
function App() {
  // const [cartIsOppen, setCartIsOppen] = useState(false)

  // const seeCart = () => {
  //   setCartIsOppen(!cartIsOppen)
  // }

  return (
    <ContextProvider >
      <Router
      // forceRefresh={true}
      >
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path="/" component={BeerContainer} />
            <Route exact path="/beer/:slug" component={BeerItemContainer} />
          </Switch>

        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
