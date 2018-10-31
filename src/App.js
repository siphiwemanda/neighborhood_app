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
      parks: [
      {
        Runnames: "South Manchester parkrun",
        location: "platt fields park, Manchester",
        organisation: "parkrun",
        distance: "5km",
        day: "Saturday",
        time: "9AM",
        LatLng: {lat: 53.447456, lng: -2.224610},
        url: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",

      },

      {
        Runnames: "Birchfields Park",
        location: "Birchfields Park, Manchester",
        organisation: "Great Local Run",
        distance: "5km, 2km",
        day: "Sunaday",
        time: "11AM",
        LatLng: {lat: 53.451355, lng: -2.212029},
        url: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",

      },

      {
        Runnames: "Burnage parkrun",
        location: "Varley Park, Manchester",
        organisation: "parkrun",
        distance: "5km",
        day: "Saturday",
        time: "9AM",
        LatLng: {lat: 53.428904, lng: -2.190995},
        url: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",


      },
      {
        Runnames: "Salford Quays",
        location: "Salford Quays, Manchester",
        organisation: "Great Local Run",
        distance: "5km, 2km",
        day: "Wednessday",
        time: "6:45PM",
        LatLng: {lat: 53.471892, lng: -2.299572},
        url: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",


      },

      {
        Runnames: "Debdale Park",
        location: "Debdale Park, Manchester",
        organisation: "Great Local Run",
        distance: "5km, 2km",
        day: "Sunday",
        time: "9AM",
        LatLng: {lat: 53.460548, lng: -2.154102},
        url: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",


      },

    ]
  }

  componentDidMount(){
    this.getparkruns()
  }

  parkruns:[]

    getparkruns =() =>{
      const endPoint = "https://api.foursquare.com/v2/venues/search?"
      const parameters = {
        client_id: "3VL5IFAPPVNRM2GDM0DRZAK3FJOSRDT0PSUGSFYQPRGVNGKC",
        client_secret: "JPWH0GDPUWAHMBUU3PQ4B1QWJN3OI2PMWLXJ2JDKI0PCUA1M",
        query: "parkrun",
        near: "Manchester, UK",
        v:"20182510"

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
     <Header parks={this.state.parks}></Header>
     <Map parks={this.state.parks}> </Map >
     <Footer></Footer>
    </main>
      </div>
    );
  }
}




export default App;
