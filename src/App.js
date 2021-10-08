import React from 'react';
import './style.css';
import Header from './containers/Header.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing.js';
import ProductDetails from './containers/ProductDetails.js';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/onlineShopping" exact component={ProductListing} />
          <Route path="product/:productId/" exact component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}
