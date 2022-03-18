let now = new Date();
let currentTime = document.querySelector("li.currentDay");
let days = [
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
currentTime.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityName = document.querySelector("li.currentCity");
  cityName.innerHTML = `${searchInput.value}`;
  //added for homework 5
  let apiKeyfirst = "7be7b75afb254afdb582a59c09762d2d";
  let apiUrlfirst = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;

  function showTemp(response) {
    let temp = Math.round(response.data.main.temp);
    let tempValue = document.querySelector("li.currentTemperature");
    tempValue.innerHTML = `${temp} ℃.`;
  }

  axios.get(`${apiUrlfirst}&appid=${apiKeyfirst}`).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// newly added for homework 5

function showPosition(position) {
  let latitude = Math.round(position.coords.latitude);
  let longitude = Math.round(position.coords.longitude);
  let apiKey = "7be7b75afb254afdb582a59c09762d2d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;

  function showTempCity(response) {
    let temperature = Math.round(response.data.main.temp);
    let currentTempValue = document.querySelector("li.currentTemperature");
    currentTempValue.innerHTML = `${temperature} ℃.`;

    let currentCityName = document.querySelector("li.currentCity");
    currentCityName.innerHTML = `${response.data.name}`;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTempCity);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#currentButton");
button.addEventListener("click", getCurrentPosition);

//---

function showTempC(event) {
  event.preventDefault();
  let currentTempC = document.querySelector("li.currentTemperature");
  currentTempC.innerHTML = "19℃";
}

let degreeCent = document.querySelector("#degC");
degreeCent.addEventListener("click", showTempC);

function showTempF(event) {
  event.preventDefault();
  let currentTempF = document.querySelector("li.currentTemperature");
  currentTempF.innerHTML = "66℉";
}

let degreeFaren = document.querySelector("#degF");
degreeFaren.addEventListener("click", showTempF);
