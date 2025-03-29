const apiKey = "ce9f20d9c292203ea240bb961d87497f"; // Replace with your OpenWeather API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        alert(error.message);
    }
}

function updateWeatherUI(data) {
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerText = `${data.main.humidity}%`;
    document.querySelector(".wind").innerText = `${data.wind.speed} km/h`;
    updateWeatherIcon(data.weather[0].main);
}

function updateWeatherIcon(weatherCondition) {
    const weatherIcon = document.querySelector(".weather-icon");
    switch (weatherCondition) {
        case "Clear":
            weatherIcon.src = "image/clear.png";
            break;
        case "Clouds":
            weatherIcon.src = "image/cloud.png";
            break;
        case "Rain":
            weatherIcon.src = "image/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "image/snow.jpg";
            break;
        case "Drizzle":
            weatherIcon.src = "image/drizzle.jpg";
            break;
        case "Mist":
            weatherIcon.src = "image/mist.png";
            break;
        default:
            weatherIcon.src = "image/default.png";
    }
}
