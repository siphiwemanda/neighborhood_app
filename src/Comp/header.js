import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import navbar from './navbar'

class Header extends Component{
  render(){
      return(
        <div>
        <div> 'Free 5 kms in manchester'  {navbar}</div>
        <div> {navbar} </div>
        </div>
)
  }
}




ReactDOM.render(
  Header,
  document.getElementById('root')
)


export default Header;
