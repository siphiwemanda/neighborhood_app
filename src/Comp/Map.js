import React, { Component } from 'react';


class Map extends Component {

  state = {
     parks: [
      {
        Parkname: "platt fields park",
        organisation: "parkrun",
        distance: "5km",
        day: "Saturday",
        time: "9AM",
        Lat: 53.447456,
        lng: -2.224610,
      },

      {
        Parkname: "Birchfields Park",
        organisation: "Great Local Run",
        distance: "5km, 2km",
        day: "Sunaday",
        time: "11AM",
        Lat: 53.451355,
        lng: -2.212029,

      },

      {
        Parkname: "Varley Park",
        organisation: "parkrun",
        distance: "5km",
        day: "Saturday",
        time: "9AM",
        Lat: 53.428904,
        lng: -2.212029,

      },

    ]
  }

  componentDidMount(){
      this.renderMap()
  }
  renderMap =()=> {
    loadscript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBndej0CC1LX31Kl_eo1JgkVz-BpWjVADo&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
        const Map = new window.google.maps.Map(document.getElementById('map'), {
           center: {lat: 53.480759, lng: -2.242631},
           zoom: 13
         })

         const marker = new window.google.maps.Marker({
           position: {lat: 53.447456,lng: -2.224610},
           map: Map,
           title:"marker one"
         })
         const markertwo = new window.google.maps.Marker({
           position: {lat: 53.451355,lng: -2.212029},
           map: Map,
           title:"marker two"
         })
         const markerthree = new window.google.maps.Marker({
           position: {lat: 53.428904,lng: -2.190995},
           map: Map,
           title:"marker three"
         })

       }
  render(){
    return(
      <div id='map'></div>
    )
  }
};

function loadscript(url){
  var index = window.document.getElementsByTagName("script")[0]
  var script =window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)

}

export default Map;
