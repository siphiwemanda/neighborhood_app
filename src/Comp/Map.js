import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import MapMarkers from './mapmarkers'


const Map = withScriptjs(withGoogleMap((props)=>{





return(
      <GoogleMap
        defaultCenter = { {lat: 53.480759, lng: -2.242631} }
        defaultZoom = { 9 }
      >
        <MapMarkers
        query ={props.query}
      parks={props.parks}
      selectedpark={props.selectedpark}
      resetpark ={props.resetpark.bind(this)}



     />
      </GoogleMap>

   )
 }
));


export default Map;
