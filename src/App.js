import React, { Component } from 'react';
import './App.css';
import Map from './Comp/Map.js'
import './Comp/places'
import Header from './Comp/header'
import Footer from './Comp/footer'
import Navbar from './Comp/navbar'
import './index.css'



class App extends Component {
 state={
   parks: [
   {
     Parkname: "platt fields park",
     organisation: "parkrun",
     distance: "5km",
     day: "Saturday",
     time: "9AM",
     picture: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
   },

   {
     Parkname: "Birchfields Park",
     organisation: "Great Local Run",
     distance: "5km, 2km",
     day: "Sunaday",
     time: "11AM",
     picture: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   },

   {
     Parkname: "Varley Park",
     organisation: "parkrun",
     distance: "5km",
     day: "Saturday",
     time: "9AM",
     picture: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   },

 ],

}
  removepark =(park)=>
this.setState((state)=>({
  parks: state.parks.filter((p)=> p.id !== park.id)

}))


  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Header/>
        </header>

        <div className="mainbody">
        <div>
         <Navbar
         onDelparks ={this.removepark}
         parks={this.state.parks}/>
        </div>
        <div style={{ height: `100%` }}>
        < Map/>
        </div>
        </div>


        <footer className = 'App-footer'>
        <Footer/>
        </footer>
        </div>


    );
  }
}

export default App;
