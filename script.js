const input = document.getElementById("location_input");
const temp = document.getElementById("temp_value");
const locationElem = document.getElementById("location");
const weather_desc = document.getElementById("weather_desc");
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");

const apiKey = "f17febde1c7eadc5eb36c7e08c8d5abd"; // Add your actual OpenWeatherMap API key here

btn.onclick = function () {
  if (input.value === "") {
    alert("Please enter a location");
  } else {
    let loc = input.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { feels_like } = data.main;
        const { description } = data.weather[0];

        locationElem.innerText = name;
        temp.innerText = Math.round(feels_like - 273);
        weather_desc.innerText = description;
      })
      .catch((err) => {
        alert("Wrong city name!");
        console.error(err);
      });

    input.value = "";
  }
};
