import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Listquery extends Component{
  render(){
      let showingParks //Filters throught the parks Array to create querry matches
      if(this.props.query){
          const match = new RegExp(escapeRegExp(this.props.query), 'i')
          showingParks = this.props.parks.filter((park)=> match.test(park.name))

      }else{
          showingParks=this.props.parks
      }

      showingParks.sort(sortBy('location'))
      console.log('props', this.props)
      console.log(showingParks)

      if(!this.props.shownav){
      return null
      }else {
    return( //returns a matching park or fill's to whole list div

    <div>
      <nav className='menu_show'>
      <div className="searchfeild">
        <input
          className="searchparks"
          type ="text"
          placeholder ="search runs"
          aria-label ='search for locations by name'
          tabIndex ='0'
          value={this.props.query}
          onChange={(event)=> this.props.whenUpdateQuery(event.target.value)}
        />
      </div>
      <ol className='listofparks' aria-hidden="true"
          aria-label='A list of locations' >
          {showingParks.map((park)=>(
            <li onClick={() => this.props.clickedpark(park) } onKeyDown={() => this.props.clickedpark(park) }
              key ={park.name} className = 'parkslist'tabIndex='0'>
              <div className= "parklistnames" >
              <p>{park.name} </p>
              </div>
            </li>
          ))}
      </ol>
      </nav>
      </div>
  )}
}
}

export default Listquery;
