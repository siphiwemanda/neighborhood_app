import React, { Component } from 'react';
import './App.css';
import Map from './Comp/Map.js'
import './Comp/places'
import Header from './Comp/header'
import Footer from './Comp/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header/>

        </header>
        < Map className='map'/>
        <footer className = 'App-footer'>
        <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
