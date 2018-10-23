import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Navbar extends Component{
  render(){
    function myFunction(x) {
    x.classList.toggle("change");
}
    return(
      <header className="nav">
      <nav>
      <div className = "hamburguer">
      <div className="container" onClick="myFunction(this)">
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
      </div>
      <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>

      </div>
      </nav>
      </header>


    )
  }
}



export default Navbar;
