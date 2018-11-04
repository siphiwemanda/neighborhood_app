import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import escapeRegExp from 'escape-string-regexp'

class MapMarkers extends Component{

    state={
      open: null,
    }

    openedmarker = (park)=>{
      this.setState({open: park})
    }


    render(){
        let showingMarkers //filters throught the markers and matches them with the query state
        if(this.props.query){
        const match = new RegExp(escapeRegExp(this.props.query), 'i')
        showingMarkers = this.props.parks.filter((park)=> match.test(park.name))
        }else{
        showingMarkers=this.props.parks
        }

        let animation = 0
        let infoWindow = null

        const parkinfo =(park) =>{
        infoWindow = null //when a park is clicked in the list bouces the marker and info window pops up
        if(this.props.selectedpark != null){
        if(park.id === this.props.selectedpark.id){
        animation=1
        infoWindow =(
          <InfoWindow onCloseClick ={()=> {
              this.props.resetpark(park)
        }}>
          <div className='info'>
          <h2>{park.name}</h2>
           <p>{park.location.formattedAddress[0] }</p>
           <p>{park.location.formattedAddress[1] }</p>
           <p>{park.location.formattedAddress[2] }</p>
           </div>
          </InfoWindow>
      )}
        else{
     animation=0
      }}
    }
        //when a mark is clicked in the map page info window pops up
        const windowmod = (park) =>{
          if (this.state.open != null){
            infoWindow = null
          if (park.id === this.state.open.id){
              infoWindow =(
             <InfoWindow onCloseClick ={(open)=> {
               this.setState({open: null})}}
               >
             <div className='info'>
             <h2>{park.name}</h2>
             <p>{park.location.formattedAddress[0] }</p>
             <p>{park.location.formattedAddress[1] }</p>
             <p>{park.location.formattedAddress[2] }</p>
             </div>
             </InfoWindow>
            )}
         }
   }


  console.log('props', this.props)
  console.log(this.state)

      return( //returns the markers 
          showingMarkers.map((park =>(
            <Marker
              key={park.id}
              position ={{lat: park.location.lat , lng: park.location.lng}}
              showinfo={parkinfo(park)}
              onClick={() => this.openedmarker(park)}
              passing={windowmod(park)}
              animation={animation}
            >
          {infoWindow}
          </Marker>
    )))
    )
  }
}

export default MapMarkers
