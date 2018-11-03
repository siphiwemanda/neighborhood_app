import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import escapeRegExp from 'escape-string-regexp'



class MapMarkers extends Component{

    state={
      open: null,
    }

    openinfo=(park)=>{
      this.setState({open:park})
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


    const parkinfo =(park) =>{
      infoWindow = null
      if(this.props.selectedpark != null){
      /*return inforwindow when park id matches show id else null*/
      if(park.id === this.props.selectedpark.id){
      infoWindow =(
        <InfoWindow onClick={() => this.openinfo(park)}>
        <div className='info'>
        <h2>{park.name}</h2>
        </div>
        </InfoWindow>
   )
   }}
    if(this.state.open != null){
      if(park.id === this.state.open.id){
      infoWindow =(
        <InfoWindow onClick={() => this.openinfo(park)}>
        <div className='info'>
        <h2>{park.name}</h2>
        </div>
        </InfoWindow>
   )
   }
    }
   }


    if(showingMarkers.isSelected === true){
    animation = 1}


  console.log('props', this.props)



return(
  showingMarkers.map((park =>(
    <Marker
          key={park.id}
          position ={{lat: park.location.lat , lng: park.location.lng}}
          animation={animation}
          showinfo={parkinfo(park)}

      >
          {infoWindow}
    </Marker>
    )))

    )
  }
}

export default MapMarkers
