import React from 'react'
import { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
const pos = {lat: 53.480759, lng: -2.242631}
return (
<div style={style}>
  <Map google={this.props.google}>
    <Marker />
    <Marker position={pos} />
  <Map/>
</div>


)

  }

}



var marker = new Marker({
  position: markers,
  map: Map,
  title: 'please'
});
