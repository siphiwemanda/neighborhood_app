import React, { Component } from 'react';
import Header from './header'
import Map from './Map'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class MapMarkers extends Component{

        render(){
        let showingMarkers
        if(this.props.query){
          const match = new RegExp(escapeRegExp(this.props.query), 'i')
          showingMarkers = this.props.parks.filter((park)=> match.test(park.name))

        }else{
          showingMarkers=this.props.parks
        }

        initMarkers =()=>{
          this.props.parks.map((park) => {
                const marker = new window.google.maps.Marker ({
                position: {lat: park.location.lat , lng: park.location.lng},
                map: Map,
                title: park.name,
                animation: window.google.maps.Animation.DROP,
                /*id: i,*/
              })
             const largeInfowindow = new window.google.maps.InfoWindow();
             marker.addListener('click', function() {
                populateInfoWindow(this, largeInfowindow);
              });
              function populateInfoWindow(marker, infowindow) {
                    // Check to make sure the infowindow is not already opened on this marker.
              if (infowindow.marker !== marker) {
                      infowindow.marker = marker;
                      infowindow.setContent('<div>' + '<p>'+park.name+'</p>' + '<p>'+park.location.address+'</p>' +  '</div>');
                      infowindow.open(Map, marker);
                      // Make sure the marker property is cleared if the infowindow is closed.
                      infowindow.addListener('closeclick',function(){
                        infowindow.setMarker = null;
                      });
                    }
                  }


            })
        }
        return(
          <MapMarkers>
          </MapMarkers>
        )
      }


}
