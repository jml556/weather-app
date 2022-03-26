const geoCode = require("./utils/geocode");
const weather = require('./utils/weather')
const location = (process.argv[2])

geoCode(location, (err,res) => {
  const {longitude, latitude} = res
  weather(latitude, longitude, (err, res) => [
    console.log(res)
  ])
})

