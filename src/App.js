import React, { Component } from 'react';
import './App.css';
import Map from './Comp/Map.js'
import './Comp/places'
import Header from './Comp/header'
import Footer from './Comp/footer'
import Navbar from './Comp/navbar'

class App extends Component {

state ={
  locationArray: [],
  selectindex:0,
}

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Header/>
        </header>

        <div className="mainbody">
        <div>
         <Navbar/>
        </div>
        <div>
        < Map/>
        </div>
        </div>


        <footer className = 'App-footer'>
        <Footer/>
        </footer>
        </div>


    );
  }
}

export default App;
