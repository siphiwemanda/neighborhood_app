import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import MapMarkers from './mapmarkers'


const Map = withScriptjs(withGoogleMap((props)=>{



  const markers = props.parks.map((park)=>{
    return (
      <MapMarkers
      key={park.name}
      query ={props.query}
      parks={props.name}
      position= {{lat: park.location.lat , lng: park.location.lng}}
      />
 )
}
)

return(
      <GoogleMap
        defaultCenter = { {lat: 53.480759, lng: -2.242631} }
        defaultZoom = { 9 }
      >
       {markers}
      </GoogleMap>

   )
 }
));


export default Map;
