import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import MapMarkers from './mapmarkers'
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);

const Map = withScriptjs(withGoogleMap((props)=>{

  window.gm_authFailure = () => {
    swal({
  title: "Error",
  text: "The google Maps API has failed to load",
  icon: "error",
});
}

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
