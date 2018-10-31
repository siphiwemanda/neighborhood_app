import React, { Component } from 'react';
import './App.css';
import './index.css'
import './header.css'

import Map from './Comp/Map'
import Header from './Comp/header'
import Footer from './Comp/footer'
import axios from 'axios'


class App extends Component {

  state ={
    parkruns:[]
  }
  componentDidMount(){
 this.getParks()
}
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
      console.log(response)
   })
   .catch(error =>{
     console.log("ERROR" + error)
   })
 };



  render() {
    return (
      <div className="App">
      <main>
   <Header parks={this.state.parkruns}></Header>
     <Map parks={this.state.parkruns}> </Map >
     <Footer></Footer>
    </main>
      </div>
    );
  }
}




export default App;
