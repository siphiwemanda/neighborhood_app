import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import escapeRegExp from 'escape-string-regexp'



class MapMarkers extends Component{

    state={
      open: null,
      dummy: false
    }

openedmarker = (park)=>{
  this.setState({open: park})
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
        if(park.id === this.props.selectedpark.id){
        infoWindow =(
          <InfoWindow onCloseClick ={()=> {
            this.props.resetpark(park)
            this.setState(prevState=>({
              dummy: !prevState.dummy
            }))

          }}>
          <div className='info'>
          <h2>{park.name}</h2>
          </div>
          </InfoWindow>
     )
     }}

   }




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
             </div>
             </InfoWindow>


         )}else{
           /*infoWindow = null*/
         }

         }

   }









  console.log('props', this.props)
  console.log(this.state)



return(
  showingMarkers.map((park =>(
    <Marker
          key={park.id}
          position ={{lat: park.location.lat , lng: park.location.lng}}
          animation={animation}
          showinfo={parkinfo(park)}
          onClick={() => this.openedmarker(park)}
          passing={windowmod(park)}



      >
          {infoWindow}
    </Marker>
    )))

    )
  }
}

export default MapMarkers
