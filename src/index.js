let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let dateTime = document.querySelector(".dateTime");
dateTime.innerHTML = `${day} ${hours}:${minutes}`;

function updateWeather(response) {
  let town = document.querySelector(".town");
  town.innerHTML = response.data.name;
  let temp = document.querySelector(".currentTemp");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}ºF`;
}

function getWeather(event) {
  event.preventDefault();
  let apiKey = "3cbb8093ae84642397f726acc0edb894";
  let town = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=imperial`;

  axios.get(`${apiUrl}`).then(updateWeather);
}

let citySearch = document.querySelector("#search");
citySearch.addEventListener("submit", getWeather);
