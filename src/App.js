import React from 'react';
import Products from './components/Products'
import Detail from './components/Detail'
import Cart from './components/Cart'
import Nav from './components/Nav'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path='/' component={Products} />
        <Route path='/product' component={Products} />
        <Route path='/detail' component={Detail} />
        <Route path='/cart' component={Cart} />
      </div>
    </BrowserRouter>
  );
}
export default App;