import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Header extends Component{
  state ={
      query:""
  }

  updateQuery =(query)=>{
    this.setState({query:query.trim()})
  }


  render(){
    let showingParks
    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingParks = this.props.parks.filter((park)=> match.test(park.location))

    }else{
      showingParks=this.props.parks
    }

    showingParks.sort(sortBy('location'))
    console.log('props', this.props)
    return (
      <div>
        <header>
    		<h1>Free Runs in Manchester</h1>
    		<div className="top">
    		<a href="#" className="menu_icon"><i className="material-icons">dehaze</i></a>
    		</div>
    	</header>
      <nav className='menu_show'>
      <div className="searchfeild">
      <input
      className="searchparks"
      type ="text"
      placeholder="search runs"
      value={this.state.query}
      onChange={(event)=> this.updateQuery(event.target.value)}
      />
      </div>

    <ol>
       {showingParks.map((park)=>(
         <li key ={park.Runnames} className = 'parkslist'>
         <div className= "parklistnames">
         {park.Runnames},
         {park.location}
         </div>
         </li>
       ))}

       </ol>
     </nav>
     </div>


    )
  }
  toggleSidenav() {
    var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
    this.setState({"showHideSidenav":css});
}

}

export default Header;
