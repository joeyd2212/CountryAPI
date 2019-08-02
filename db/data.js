const fs = require("fs");
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;region;subregion;population;languages;translations;acronym;currencies;flag')
  .then(function (response) {
    // handle success
    console.log(response.data);
    fs.writeFile("./db/countries.json", JSON.stringify(response.data), err => {
      if (err) {
        console.error(err);
      } else {
        console.log("done");
      }
    })
  });