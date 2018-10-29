import React, { Component } from 'react';
import './App.css';
import './index.css'
import axios from 'axios'
import Map from './Comp/Map'


class App extends Component {





  render() {
    return (
      <div className="App">
      <main>
    <div id='map'> <Map> </Map></div>
    </main>
      </div>
    );
  }
}



export default App;
