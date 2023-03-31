function displayCurrentWeather(response){
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#main-temperature").innerHTML = Math.round (response.data.main.temp);
}

function searchLocation(position){
  let apiKey = "7e67235e40d58e70d3e9c3f3890d96b9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayCurrentWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "7e67235e40d58e70d3e9c3f3890d96b9";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentWeather);
}

let form = document.querySelector("#search-form")
form.addEventListener("submit", searchCity);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let now = new Date();

let h3 = document.querySelector("h3");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];


let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h3.innerHTML = `${day} ${hour}:${minutes}`;
