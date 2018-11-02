import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import escapeRegExp from 'escape-string-regexp'



class MapMarkers extends Component{

    state={
      showinfowindow: false
    }

    infowindowclosed=()=>{
      this.setState(prevState =>({
        showinfowindow: !prevState.showinfowindow
      }))
    }




    handleMarkerOnClick = () => {
  this.props.whenMarkerIsClicked(this.props.location)
}

handleInfoWindowOnClose = () => {
  this.props.whenMarkerIsClicked(null)
}

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

    if(showingMarkers.isSelected === true){
    animation = 1}

    infoWindow =(
        <InfoWindow onClick={() => this.handleInfoWindowOnClose()}>
            <div className='info'>
            <h2>hello</h2>
              </div>
    </InfoWindow>
    )

  console.log('props', this.props)

return(
  showingMarkers.map((park =>(
    <Marker
          key={park.id}
          position ={{lat: park.location.lat , lng: park.location.lng}}
          animation={animation}
          onClick={()=> this.handleMarkerOnClick()}
      >
          {infoWindow}
    </Marker>
    )))

    )
  }
}

export default MapMarkers
