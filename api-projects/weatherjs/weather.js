class Weather {
  constructor(city, country) {
    this.apiKey = '745a222c162e57b6bf3719232dc74449';
    this.city = city;
    this.country = country;
  }

  //fetch weather from API
  async getWeather() {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=imperial&appid=${this.apiKey}`);

    const responseData = await response.json();
    console.log(response);
    return responseData.list;
  }

  // change weather location
  changeLocation(city, country) {
    this.city = city;
    this.state = country;
  }
}