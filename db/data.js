const axios = require("axios");
const fs = require("fs");
axios
 .get(
   "https://restcountries.eu/rest/v2/all?fields=languages"
 )
 .then(response => {
   // handle success
   console.log(response.data);
   let stringified = JSON.stringify(response.data);
  
   fs.writeFile(__dirname + "/languages.json", stringified, "utf8", err => {
     if (err) {
       console.error(err);
     } else {
       console.log("Successful request!");
     }
   });
 });





