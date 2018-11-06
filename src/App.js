import React, { Component } from 'react';
import './App.css';
import './index.css'
import './header.css'
import Map from './Comp/Map'
import Header from './Comp/header'
import Footer from './Comp/footer'
import axios from 'axios'
import Listquery from './Comp/listquery'


class App extends Component {
  state ={
    parkruns:[],
    query:'',
    shownav: false,
    click: false,
    ClickedID: null,
    }

  componentDidMount(){
  this.getParks()
  }

//creating all the states that alow the user to interact with the map, list and markers
  updateQuery =(query)=>{
  this.setState({query:query.trim()})
  }

  Updatepark = (park)=>{
  this.setState({ClickedID:park})
  }

  navBarbtn() {
  this.setState(prevState => ({
    shownav: !prevState.shownav}))
  }

  clearPark =() =>{
  this.setState({ClickedID: null})
  }

//get Parkruns from Foursquare
  getParks=() =>{
   const endPoint = "https://api.foursquare.com/v2/venues/search?"
   const parameters = {
     client_id: "3VL5IFAPPVNRM2GDM0DRZAK3FJOSRDT0PSUGSFYQPRGVNGKC",
     client_secret: "JPWH0GDPUWAHMBUU3PQ4B1QWJN3OI2PMWLXJ2JDKI0PCUA1M",
     query: "parkrun",
     near: "Manchester, UK",
     v:"20182507"
    };
   axios.get(endPoint + new URLSearchParams(parameters))
   .then(response =>{
     this.setState({
       parkruns: response.data.response.venues
     })
   })
   .catch(error =>{
     alert('Sorry, cant get the information from Foursquare right now')
   })}



  render() {
    return (
      <div className="App">
      <main>
     <Header
            navbtn ={this.navBarbtn.bind(this)}
            />
     <Listquery
            query ={this.state.query}
            whenUpdateQuery={this.updateQuery.bind(this)}
            parks={this.state.parkruns}
            shownav={this.state.shownav}
            clickedpark={this.Updatepark.bind(this)}
            />

            {
             (!navigator.onLine) &&
             (<h1> Sorry! Somethings gone wrong. Check your connection and try again.</h1>)
            }

    <Map
           parks={this.state.parkruns}
           query ={this.state.query}
           selectedpark={this.state.ClickedID}
           resetpark ={this.clearPark.bind(this)}
           googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBndej0CC1LX31Kl_eo1JgkVz-BpWjVAD'
           loadingElement={<div  style={{ height: `100%` }}tabIndex="-1"/>}
           containerElement={ <div style={{ height: `100vh`, width: '100vw' }}
           role="application"
           tabIndex="-1"
           aria-label="Map showing parkrus in Greater Manchester"
           /> }
           mapElement={ <div style={{ height: `100%` }} tabIndex="-1"/> }
           />

     <Footer></Footer>
     </main>
     </div>
    );
  }
}




export default App;
