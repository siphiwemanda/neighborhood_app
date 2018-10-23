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


   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
