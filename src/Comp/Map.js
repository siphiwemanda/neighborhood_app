import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import MapMarkers from './mapmarkers'
import swal from 'sweetalert2';


const Map = withScriptjs(withGoogleMap((props)=>{

  window.gm_authFailure = () => {
    swal("Sorry!", "Look's like GoogleMaps failed to load!", "warning");
    };

   return(
      <GoogleMap
        defaultCenter = { {lat: 53.481385, lng: -2.242011} }
        defaultZoom = { 10 }
      >
        <MapMarkers
        query ={props.query}
        parks={props.parks}
        selectedpark={props.selectedpark}
        resetpark ={props.resetpark.bind(this)}
     />
        </GoogleMap>
      )}
));

export default Map;
