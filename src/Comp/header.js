import React, { Component } from 'react';
class Header extends Component{
  render(){

    return (
      <div>
        <header>
    		<h1>Free Runs Near Manchester</h1>
    		<div className="top">
    		<a href="#" onClick={(e) => this.props.navbtn(e)}
        className="menu_icon">
        <i className="material-icons">dehaze</i></a>
        </div>
        </header>

    		</div>
  )
  }

}

export default Header;
