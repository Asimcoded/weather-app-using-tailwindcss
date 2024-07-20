// api key and urls
const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=7e9138465d775a1a266f342713702944&units=metric&q=";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&appid=7e9138465d775a1a266f342713702944&units=metric&q="
const imgURL = "https://openweathermap.org/img/wn/";

async function getWeather(location) {
    const forecastResponse = await fetch(apiURLForecast + location);
    const forecastData = await forecastResponse.json();
    const response = await fetch(apiURL + location);
    const data = await response.json();
    console.log(forecastData)
    console.log(data)
}
function setData(data, forecastData) {
    document.getElementById('mainTemp').textContent = data.main.temp + " °C";
    document.getElementById("locationName").textContent = data.name;
    document.getElementById("weatherIcon").setAttribute("src",imgURL+data.weather[0].icon+".png");
    document.getElementById("descMain").textContent = data.weather[0].main;
    document.getElementById("cloud").textContent = data.clouds.all + "%";
    document.getElementById("humidity").textContent = data.main.humidity + "%";
    document.getElementById("speed").textContent = data.wind.speed +" km/h"
    document.getElementById("visi").textContent = data.visibility +" M"

}

setData(dataS,dataS2)