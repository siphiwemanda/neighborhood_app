import React, { Component } from 'react';
class Header extends Component{
  render(){


    return (
      <div>
        <header role='banner'
          tabIndex='0'>

    		<h1>Free Runs Near Manchester</h1>
    		<div className="top" tabIndex='0'
        aria-label='Header'>

    		<button  aria-label= 'open list' tabIndex='0' onClick={(e) => this.props.navbtn(e)} >
        <div class="container" onclick="myFunction(this)">
       <div class="bar1"></div>
       <div class="bar2"></div>
       <div class="bar3"></div>
        </div>

        </button>
        </div>
        </header>

    		</div>
  )
  }

}

export default Header;
