getParks =() =>{
  const endPoint = "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
    Client_id: "3VL5IFAPPVNRM2GDM0DRZAK3FJOSRDT0PSUGSFYQPRGVNGKC",
    Client_secret: "JPWH0GDPUWAHMBUU3PQ4B1QWJN3OI2PMWLXJ2JDKI0PCUA1M",
    section: "Parks",
    near: "Manchester, England",
    v: "20182910",
  };
  axios.get(endPoint + new URLSearchParams(parameters))
  .then(response =>{
    console.log(response)
  })
  .catch(error =>{
    console.log("ERROR" + error)
  })
}
