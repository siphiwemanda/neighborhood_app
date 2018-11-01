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
    pickedlocation: null

  }
  componentDidMount(){
 this.getParks()
}

updateQuery =(query)=>{
  this.setState({query:query.trim()})
}

navBarbtn() {
  this.setState(prevState => ({
    shownav: !prevState.shownav
  }))
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
     <Header
            parks={this.state.parkruns}
            navbtn ={this.navBarbtn.bind(this)}
            />
     <Listquery
            query ={this.state.query}
            whenUpdateQuery={this.updateQuery.bind(this)}
            parks={this.state.parkruns}
            shownav={this.state.shownav}


            />
     <Map
            parks={this.state.parkruns}
            query ={this.state.query}
            whenUpdateQuery={this.updateQuery.bind(this)}

            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBndej0CC1LX31Kl_eo1JgkVz-BpWjVADo'

            loadingElement={<div  style={{ height: `100%` }}/>}
            containerElement={ <div style={{ height: `100vh`, width: '100vw' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }


            />
     <Footer></Footer>
    </main>
      </div>
    );
  }
}




export default App;
