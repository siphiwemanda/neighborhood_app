import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
      super(props);
   }

   getInitialState(){
  return {"showHideSidenav":"hidden"};
}

  render(){
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
      <ol>
       {this.props.parks.map((park)=>(
         <li key ={park.Runnames} className = 'parkslist'>
         <div className= "parklistnames">
         {park.Runnames}
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
