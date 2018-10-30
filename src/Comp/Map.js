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
    const Map = new window.google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.480759, lng: -2.242631},
    zoom: 12
    });

    this.props.parks.map((park) => {
          const marker = new window.google.maps.Marker ({
          position: park.LatLng,
          map: Map,
          title: park.Parkname,
          animation: window.google.maps.Animation.DROP,
          /*id: i,*/
        })

  

      })
console.log('beep')

}



render(){
  console.log('props', this.props)
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
