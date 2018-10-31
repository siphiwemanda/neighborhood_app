import React, { Component } from 'react';
import axios from 'axios'


class Foursquare extends Component{

state ={
  parkruns:[]
}
  componentDidMount(){
    this.getparkruns()
  }
    getparkruns =() =>{
      const endPoint = "https://api.foursquare.com/v2/venues/search?"
      const parameters = {
        client_id: "3VL5IFAPPVNRM2GDM0DRZAK3FJOSRDT0PSUGSFYQPRGVNGKC",
        client_secret: "JPWH0GDPUWAHMBUU3PQ4B1QWJN3OI2PMWLXJ2JDKI0PCUA1M",
        query: "parkrun",
        near: "Manchester, UK",
        v:"201825"

      };
      axios.get(endPoint + new URLSearchParams(parameters))
      .then(response =>{
        this.setState({
          parkruns: response.data.response.venues
        })

        console.log(response)
      })
      .catch(error =>{
        console.log("ERROR" + error)
      })
    };
    render(){


      return(
     <div></div>
      )
    }
}

export default Foursquare;
