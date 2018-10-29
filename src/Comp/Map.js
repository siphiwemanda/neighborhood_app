import React, { Component } from 'react';


class Map extends Component {

  componentDidMount(){
      this.renderMap()
  }
  renderMap =()=> {
    loadscript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBndej0CC1LX31Kl_eo1JgkVz-BpWjVADo&callback=initMap")
    window.initMap = this.initMap
  }


initMap = () => {
    const markers = [];

    const locations=[
      {Runnames: "South Manchester parkrun", location: {lat: 53.447456, lng: -2.224610}},
      {Runnames: "Birchfields Park",         location: {lat: 53.451355, lng: -2.212029}},
      {Runnames: "Burnage parkrun",          location: {lat: 53.428904, lng: -2.190995}},

    ];

      const Map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.480759, lng: -2.242631},
      zoom: 13
    });


    for(let i=0;i<locations.length;i++){
            const position = locations[i].location;
            const runnames = locations[i].runnames;

                   const marker = new window.google.maps.Marker({
                     position: position,
                     map: Map,
                     title: runnames,
                     animation: window.google.maps.Animation.DROP,
                     id: i,
                    })
    markers.push(marker)
        }
};

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
