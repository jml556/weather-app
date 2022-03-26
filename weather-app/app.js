const geoCode = require("./utils/geocode");
const weather = require('./utils/weather')

function getCoords() {}

geoCode('towson', (err,res) => {
  const {longitude, latitude} = res
  weather(latitude, longitude, (err, res) => [
    console.log(res)
  ])
})

