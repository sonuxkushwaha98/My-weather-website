const cityName = document.querySelector('#cityName')
const temperature = document.querySelector('#temp')
const humidity = document.querySelector('#humidity')
const feelsLike = document.querySelector('#feelslike')
const windspeed = document.querySelector('#windSpeed')
const country = document.querySelector('#country')
const region = document.querySelector('#region')
const searchInpt = document.querySelector('#searchInpt')
const searchBtn = document.querySelector('#searchBtn')

const getWeather =  () => {
   searchBtn.addEventListener('click', async(e) => {
      e.preventDefault();
      let value = searchInpt.value;
      console.log(value);
      let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=89a8c580db13441ea4f155129240707&q=${value}`);
      data = await data.json();
      console.log(data);
      temperature.innerHTML = "<b>Temperature</b> " +data.current.temp_c + "&#8451";
      humidity.innerHTML =  "<b>Humidity</b> "+data.current.humidity + '%';
      feelsLike.innerHTML = "<b>Feels like</b> "+data.current.feelslike_c + "&#8451";
      windspeed.innerHTML="<b>Wind speed</b> "+data.current.wind_kph+"Km/h";
      country.innerHTML="<b>Country</b> "+data.location.country;
      cityName.innerHTML = "Welcome to "+data.location.name;
      region.innerHTML="<b>Region</b> "+data.location.region;
      console.log(searchInpt);
   })

}
getWeather();
