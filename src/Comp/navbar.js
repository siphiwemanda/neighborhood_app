import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Navbar extends Component{
  render(){
    console.log('props', this.props)

    return(
      <header className="nav">
      <nav>
      <div className = "hamburguer">
      <div className="container" onClick="myFunction(this)">
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
      </div>

      <ol className ="contactlist">
          {this.props.parks.map((park)=>(
              <li key={park.Parkname} className ="contactlist-more">

              <div className= "picturea" style={{
                  backgroundImage:`url(${park.picture})`
                  }}>


      </div>
      <div className="parknames">
      {park.Parkname}
      {park.day}
      {park.distance}
      </div>

      <button onClick={()=> this.props.onDelparks(park)} className="remove">
      X
      </button>
      </li>
    ))}

  </ol>

      </div>
      </nav>
      </header>


    )
  }
}



export default Navbar;
