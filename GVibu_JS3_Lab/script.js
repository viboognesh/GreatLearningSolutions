document
  .getElementById("city-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const cityName = document.getElementById("city-input").value;
      if (cityName) {
        fetchWeather(cityName);
      } else {
        alert("Please enter a city name.");
      }
    }
  });

function fetchWeather(cityName) {
  const apiKey = "9ac0e33595384e4d96862741242904";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.current) {
        displayWeather(data);
      } else {
        alert("City not found. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    });
}

function displayWeather(data) {
  const cityNameElement = document.getElementById("city-name");
  const dateElement = document.getElementById("date");
  const temperatureElement = document.getElementById("temperature");
  const weatherDescElement = document.getElementById("weather-desc");
  //   const tempRangeElement = document.getElementById("temp-range");

  const date = new Date();
  const temperature = data.current.temp_c;
  const weatherDesc = data.current.condition.text;
  const weatherImg = data.current.condition.icon;
  //   const tempRange = `${data.current.temp_min_c}°C - ${data.current.temp_max_c}°C`;

  cityNameElement.textContent = data.location.name;
  dateElement.textContent = `${date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
  temperatureElement.textContent = `${temperature}°C`;
  weatherDescElement.textContent = `${weatherDesc}`;
  //   tempRangeElement.textContent = `${tempRange}`;

  // Create an image element for the weather icon
  // const weatherIcon = document.createElement("img");
  // weatherIcon.src = weatherImg; // Adjust the path and file naming as needed
  // weatherIcon.alt = weatherDesc;
  // weatherIcon.width = 30; // Set the width of the icon
  // weatherIcon.height = 30; // Set the height of the icon

  // // Append the image to the weather description paragraph
  // weatherDescElement.innerHTML = ""; // Clear the paragraph content
  // weatherDescElement.appendChild(weatherIcon); // Append the image
  // weatherDescElement.appendChild(document.createTextNode(" " + weatherDesc)); // Append the weather description text
}
