import React, { Component } from 'react';
import './App.css';
import Footer from './Component/Footer.js';
import Header from './Component/Header.js';
import ShoppingList from './Component/ShoppingList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ShoppingList name="Twen" age='22' />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
