const date = document.querySelector('#date')
const temperature = document.querySelector('#temp')
const humidity = document.querySelector('#humidity')
const feelsLike = document.querySelector('#feelslike')
const windspeed = document.querySelector('#windSpeed')
const windDir = document.querySelector('#windDir')
const country = document.querySelector('#country')
const region = document.querySelector('#region')
const searchInpt = document.querySelector('#searchInpt')
const searchBtn = document.querySelector('#searchBtn')
const tempImg = document.querySelector('#tempImg')
const text = document.querySelector('#text')
const states = document.querySelectorAll('.statesBtn')

const currentWeather = async () => {
   let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=89a8c580db13441ea4f155129240707&q=haryana`);
   data = await data.json();
   console.log(data)
   temperature.innerHTML = `<b>${data.location.name}</b> ` + `<h1>${data.current.temp_c}&#8451</h1>`;
   humidity.innerHTML = "<b>Humidity</b> " + data.current.humidity + '%';
   feelsLike.innerHTML = "<b>Feels like</b> " + data.current.feelslike_c + "&#8451";
   windspeed.innerHTML = "<b>Wind speed</b> " + data.current.wind_kph + "Km/h";
   windDir.innerHTML = "<b>Wind direction</b> " + data.current.wind_dir
   country.innerHTML = "<b>Country</b> " + data.location.country;
   date.innerHTML = "Date/Time " + data.current.last_updated;
   region.innerHTML = "<b>Region</b> " + data.location.region;
   tempImg.src = data.current.condition.icon;
   text.innerHTML = data.current.condition.text
}
currentWeather();

const weatherOnClick = () => {
   for (let i = 0; i < states.length; i++) {
      states[i].addEventListener('click', async () => {
         let value = states[i].value
         console.log(value)
         let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=89a8c580db13441ea4f155129240707&q=${value}`);
         data = await data.json();
         temperature.innerHTML = `<b>${data.location.name}</b> ` + `<h1>${data.current.temp_c}&#8451</h1>`;
         humidity.innerHTML = "<b>Humidity</b> " + data.current.humidity + '%';
         feelsLike.innerHTML = "<b>Feels like</b> " + data.current.feelslike_c + "&#8451";
         windspeed.innerHTML = "<b>Wind speed</b> " + data.current.wind_kph + "Km/h";
         windDir.innerHTML = "<b>Wind direction</b> " + data.current.wind_dir
         country.innerHTML = "<b>Country</b> " + data.location.country;
         date.innerHTML = "Date/Time " + data.current.last_updated;
         region.innerHTML = "<b>Region</b> " + data.location.region;
         tempImg.src = data.current.condition.icon;
         text.innerHTML = data.current.condition.text
      })

   }
}
weatherOnClick()

const getWeather = () => {
   searchBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      let value = searchInpt.value;
      console.log(value);
      let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=89a8c580db13441ea4f155129240707&q=${value}`);
      data = await data.json();
      console.log(data);
      temperature.innerHTML = `<b>${data.location.name}</b> ` + `<h1>${data.current.temp_c}&#8451</h1>`;
      humidity.innerHTML = "<b>Humidity</b> " + data.current.humidity + '%';
      feelsLike.innerHTML = "<b>Feels like</b> " + data.current.feelslike_c + "&#8451";
      windspeed.innerHTML = "<b>Wind speed</b> " + data.current.wind_kph + "Km/h";
      windDir.innerHTML = "<b>Wind direction</b> " + data.current.wind_dir
      country.innerHTML = "<b>Country</b> " + data.location.country;
      date.innerHTML = "Date/Time " + data.current.last_updated;
      region.innerHTML = "<b>Region</b> " + data.location.region;
      tempImg.src = data.current.condition.icon;
      text.innerHTML = data.current.condition.text
      console.log(searchInpt);
   })

}
getWeather();
