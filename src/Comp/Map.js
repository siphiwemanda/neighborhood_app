import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 53.480759, lng: -2.242631 } }
        defaultZoom = { 12 }
      >
      </GoogleMap>
   ));
   const bircfeildpark  = {lat:53.451326 , lng:-2.211822 }
   const marker = new google.maps.Marker({
     position: bircfeildpark,
     map: map,
     title: "bircfeildpark"
   });

   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `579px`, width: '100px%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
