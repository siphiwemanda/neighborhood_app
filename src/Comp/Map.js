import React from 'react'
import { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const markers = { lat: 53.480759, lng: -2.242631};


class Map extends Component {

   render() {


     const MyMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 53.480759, lng: -2.242631} }
        defaultZoom = { 13 } >
        <Marker />
        <Marker position={markers} />
      </GoogleMap>



   ));





     return(
      <div>
        <MyMap
          containerElement={ <div style={{ height: `100vh`, width: '100vw' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }

        />

      </div>
   );
 }
};
export default Map;
