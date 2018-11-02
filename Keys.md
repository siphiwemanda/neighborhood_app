Google api key
AIzaSyBndej0CC1LX31Kl_eo1JgkVz-BpWjVADo

foursquare api key
Client ID
3VL5IFAPPVNRM2GDM0DRZAK3FJOSRDT0PSUGSFYQPRGVNGKC
Client Secret
JPWH0GDPUWAHMBUU3PQ4B1QWJN3OI2PMWLXJ2JDKI0PCUA1M


get lat long values

https://github.com/axios/axios (axios)




refreaccnes
https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
https://stackoverflow.com/questions/22639534/pass-props-to-parent-component-in-react-js

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js (hamburguer menu)



https://materializecss.com/icons.html (menu bar )

return(
   <div>
     <GoogleMapExample
       containerElement={ <div style={{ height: `100vh`, width: '100vw' }} /> }
       mapElement={ <div style={{ height: `100%` }} /> }
     />
   </div>
);
}
};



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
