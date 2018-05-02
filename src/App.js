import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Gallery />
      </div>
    );
  }
}

export default App;
