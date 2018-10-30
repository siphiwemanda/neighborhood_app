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
const bircfeildpark  = {lat:53.451326 , lng:-2.211822 }
const marker = new google.maps.Marker({
  position: bircfeildpark,
  map: map,
  title: "bircfeildpark"





  state={
    parks: [
    {
      Parkname: "platt fields park",
      organisation: "parkrun",
      distance: "5km",
      day: "Saturday",
      time: "9AM",
      picture: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },

    {
      Parkname: "Birchfields Park",
      organisation: "Great Local Run",
      distance: "5km, 2km",
      day: "Sunaday",
      time: "11AM",
      picture: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },

    {
      Parkname: "Varley Park",
      organisation: "parkrun",
      distance: "5km",
      day: "Saturday",
      time: "9AM",
      picture: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },

  ],

 }


 removepark =(park)=>
this.setState((state)=>({
 parks: state.parks.filter((p)=> p.id !== park.id)

}))


const markers = [];

const locations=[
  {Runnames: "South Manchester parkrun", location: {lat: 53.447456, lng: -2.224610}},
  {Runnames: "Birchfields Park",         location: {lat: 53.451355, lng: -2.212029}},
  {Runnames: "Burnage parkrun",          location: {lat: 53.428904, lng: -2.190995}},

];


for(let i=0;i<locations.length;i++){
        const position = locations[i].location;
        const runnames = locations[i].runnames;

                 const marker = new window.google.maps.Marker({
                 position: position,
                 map: Map,
                 title: runnames,
                 animation: window.google.maps.Animation.DROP,
                 id: i,
                })
markers.push(marker)
    }
};
