import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Listquery extends Component{
  state={}

render(){
  let showingParks
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
  return(

    <div>
    <nav className='menu_show'>
    <div className="searchfeild">
    <input
    className="searchparks"
    type ="text"
    placeholder="search runs"
    value={this.state.query}
    onChange={(event)=> this.props.whenUpdateQuery(event.target.value)}
    />
    </div>

    <ol className='listofparks'>
      {showingParks.map((park)=>(
      <li key ={park.name} className = 'parkslist'>
      <div className= "parklistnames">
      <p>{park.name} </p>

      </div>
      </li>
    ))}

    </ol>
    </nav>
    </div>
  )
}
}
}

export default Listquery;
