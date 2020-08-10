import React from 'react';
import logo from './logo.svg';
import {Route,Link ,BrowserRouter as Router}from 'react-router-dom';
import home from'./components/home';
import category from './components/category';
import products from './components/products';
import adminarea from './components/adminarea';
import './App.css';

function App() {
  return (
    <div>
      <Router>
    <ul>
      <li>
        <Link to='/home'>Home</Link>

      </li>
      <li>
        <Link to='/category'>Category</Link>
        
      </li>
      <li>
        <Link to='/products'>Products</Link>
        
      </li>
      <li>
        <Link to='/adminarea'>AdminArea</Link>
        
      </li>
    </ul>
    
    
  
  <Route exact path="/home" component={home} />
  <Route path="/category" component={category} />
  <Route path="/products" component={ products} />
  <Route path="/adminarea" component={adminarea} />
  </Router>
    </div>
  );
}

export default App;
