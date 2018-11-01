import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'



class MapMarkers extends Component{

state={}


    render(){
      let animation = null
        let infoWindow = null
  infoWindow =(
    <InfoWindow>
    <div className='info'>
    <h2>hey!</h2>
    </div>
    </InfoWindow>
  )

return(
  <Marker
     position ={this.props.position}
     animation={animation}
>
{infoWindow}
</Marker>
)
}
}

export default MapMarkers
