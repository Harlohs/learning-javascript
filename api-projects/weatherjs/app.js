// initialize weather object
const weather = new Weather('London', 'gb');


weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));