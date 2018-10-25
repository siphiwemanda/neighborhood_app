Google api key
AIzaSyBndej0CC1LX31Kl_eo1JgkVz-BpWjVADo

foursquare api key
Client ID
3VL5IFAPPVNRM2GDM0DRZAK3FJOSRDT0PSUGSFYQPRGVNGKC
Client Secret
JPWH0GDPUWAHMBUU3PQ4B1QWJN3OI2PMWLXJ2JDKI0PCUA1M


get lat long values




refreaccnes
https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
https://stackoverflow.com/questions/22639534/pass-props-to-parent-component-in-react-js

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js (hamburguer menu)

const bircfeildpark  = {lat:53.451326 , lng:-2.211822 }
const marker = new google.maps.Marker({
  position: bircfeildpark,
  map: map,
  title: "bircfeildpark"





  class Map extends Component {
     render() {
     const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 53.480759, lng: -2.242631 } }
          defaultZoom = { 12 }
        >
        </GoogleMap>
     ));


     return(
        <div className="Mapdiv">
          <GoogleMapExample
          loadingElement={
             <div
               style={{ height: `100%` }}
             />
           }
           containerElement={
             <div
               style={{ height: `100vh` }}
               role="application"
               tabIndex="0"
               aria-label="Map with locations of Christmas Markets"
             />
           }
           mapElement={
             <div
              style={{ height: `100%` }}
             />
           }
         />
       </div>
     );
     }
  };
