import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import MapMarkers from './mapmarkers'


const Map = withScriptjs(withGoogleMap((props)=>{



  // const markers = props.parks.map((park)=>{
    //return (
      //<MapMarkers

//}
//)

return(
      <GoogleMap
        defaultCenter = { {lat: 53.480759, lng: -2.242631} }
        defaultZoom = { 9 }
      >
        <MapMarkers
      /*key={park.id}*/
      query ={props.query}
      parks={props.parks}
      selectedpark={props.selectedpark}
      resetpark ={props.resetpark.bind(this)}



     />
//)
      </GoogleMap>

   )
 }
));


export default Map;
