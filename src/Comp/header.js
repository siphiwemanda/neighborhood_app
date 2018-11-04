import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
      <div>
        <header role='banner'>
    		  <h1>parkruns in the Greater Manchester area </h1>
    		    <div className="top">
    		     <button tabIndex='0' aria-label= 'open list'  onClick={(e) => this.props.navbtn(e)} >
               <div className="container">
               <div className="bar1"></div>
               <div className="bar2"></div>
               <div className="bar3"></div>
               </div>
              </button>
            </div>
       </header>
    	</div>
  )}
}

export default Header;
