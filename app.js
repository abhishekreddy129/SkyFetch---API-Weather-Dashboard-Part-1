const apiKey = "YOUR_API_KEY_HERE";

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(url)
    .then(function(response) {
      console.log("Weather Data:", response.data);
      displayWeather(response.data);
    })
    .catch(function(error) {
      console.error("Error fetching weather:", error);
    });
}

function displayWeather(data) {
  document.getElementById("city").innerText = data.name;
  document.getElementById("temperature").innerText = `🌡 ${data.main.temp} °C`;
  document.getElementById("description").innerText = `☁ ${data.weather[0].description}`;

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  document.getElementById("weather-icon").src = iconUrl;
}

// Fetch London weather by default
fetchWeather("London");
