import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class MapMarkers extends Component{

state={}


    render(){



      let showingMarkers
      if(this.props.query){
        const match = new RegExp(escapeRegExp(this.props.query), 'i')
        showingMarkers = this.props.parks.filter((park)=> match.test(park.name))

      }else{
        showingMarkers=this.props.parks
      }

      let animation = null
        let infoWindow = null
      infoWindow =(
    <InfoWindow>
    <div className='info'>
    <h2>{this.name}</h2>
    </div>
    </InfoWindow>
  )

  console.log('props', this.props)
  console.log(showingMarkers)

return(
  showingMarkers.map((park =>(
    <Marker
       position ={this.props.position}
       animation={animation}
  >
  {infoWindow}
  </Marker>

)))

)
}
}

export default MapMarkers
