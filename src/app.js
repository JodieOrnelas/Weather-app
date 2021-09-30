function displayInfo(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#tempNow");
  let descriptionElement = document.querySelector("#description");
  //  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  // let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  //humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  //dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "427140810191e99fb93ea0eb8a6cf6df";
let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(url).then(displayInfo);
