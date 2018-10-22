import React, { Component } from 'react';
import './App.css';
import Map from './Comp/Map.js'
import './Comp/places'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        < Map className='map'/>
      </div>
    );
  }
}

export default App;
