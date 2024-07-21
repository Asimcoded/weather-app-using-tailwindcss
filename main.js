// dark light mode code
const modeToggleBtn = document.getElementById("modeToggle");
const HTMLTag = document.querySelector("html");
modeToggleBtn.addEventListener("change", (e) => {
    HTMLTag.classList.toggle("dark")
    HTMLTag.classList.contains("dark") ? document.getElementById("modeLabel").innerHTML = `<i class="fa-solid fa-sun"></i>` : document.getElementById("modeLabel").innerHTML = `<i class="fa-solid fa-moon"></i>`;
})

// api key and urls
const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=7e9138465d775a1a266f342713702944&units=metric&q=";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&appid=7e9138465d775a1a266f342713702944&units=metric&q="
const imgURL = "https://openweathermap.org/img/wn/";

async function getWeather(location) {
    const forecastResponse = await fetch(apiURLForecast + location);
    const response = await fetch(apiURL + location);
    if(response.status != 200 && forecastResponse.status != 200){
        for (let index = 0; index < 3; index++) {
            skeletonElement[index].classList.toggle("hidden")
            mainElement[index].classList.toggle("hidden")
        }
    }
    if(response.status == 400 && forecastResponse.status == 400){
        document.querySelector(".alert").classList.remove("hidden")
    }
    if (response.status == 200 && forecastResponse.status == 200) {
        const forecastData = await forecastResponse.json();
        const data = await response.json();
        setData(data, forecastData);
    }
}

function setData(data, forecastData) {
    document.querySelector(".alert").classList.add("hidden")
    for (let index = 0; index < 3; index++) {
        skeletonElement[index].classList.add("hidden")
        mainElement[index].classList.remove("hidden")
    }

    document.getElementById('mainTemp').textContent = data.main.temp + " °C";
    document.getElementById("locationName").textContent = data.name;
    document.getElementById("weatherIcon").setAttribute("src", imgURL + data.weather[0].icon + ".png");
    document.getElementById("descMain").textContent = data.weather[0].main;
    document.getElementById("cloud").textContent = data.clouds.all + "%";
    document.getElementById("humidity").textContent = data.main.humidity + "%";
    document.getElementById("speed").textContent = data.wind.speed + " km/h"
    document.getElementById("visi").textContent = data.visibility + " M"

    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let weekElement = document.getElementsByClassName("weatherDays");
    let tempArr = [];
    let timeArr = [];
    let forecastArr = [];
    for (const prop in forecastData.list) {
        if (forecastData.list[prop].dt_txt.split(" ")[1] === forecastData.list[0].dt_txt.split(' ')[1]) {
            forecastArr.push(forecastData.list[prop])
        }
    }
    forecastArr.forEach((e, i) => {
        weekElement[i].children[0].textContent = e.main.temp + " °C"
        weekElement[i].children[1].textContent = weekDays[new Date(e.dt * 1000).getDay()]
        weekElement[i].children[2].textContent = e.weather[0].main
    })
    let count = 0;

    for (const index in forecastData.list) {
        if (index % 2 == 0) {
            tempArr.push(forecastData.list[index].main.temp)
            timeArr.push(forecastData.list[index].dt_txt.split(" ")[1].slice(0, 5))
            count++
        }
        if (count == 6) {
            break;
        }
    }

    const options = {
        chart: {
            height: "500",
            maxWidth: "100%",
            type: "area",
            colors: '#FF0000',
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 6,
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0
            },
        },
        series: [
            {
                name: "Temperature",
                data: tempArr,
                color: "#1A56DB",
            },
        ],
        xaxis: {
            categories: timeArr,
            labels: {
                show: true,
                style: {
                    colors: ["#6b7280", "#6b7280", "#6b7280", "#6b7280", "#6b7280", "#6b7280"],
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        yaxis: {
            show: true,
            labels: {
                align: 'left',
                style: {
                    colors: ["#6b7280", "#6b7280", "#6b7280", "#6b7280", "#6b7280", "#6b7280"],
                }
            }
        },
    }
    const chart = new ApexCharts(document.getElementById("area-chart"), options);
    if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
        chart.render();
        chart.updateOptions({
            xaxis: {
                categories: timeArr,
            },
            series: [
                {
                    data: tempArr,
                },
            ],
        })
    }
}
const inputBox = document.getElementById("inputBox");
const searchBtn = document.getElementById("searchBtn");
const inputBoxMobile = document.getElementById("inputBoxMobile");
const searchBtnMobile = document.getElementById("searchBtnMobile");
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        getWeather(inputBox.value);
    }
})
inputBoxMobile.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        getWeather(inputBoxMobile.value);
    }
})
searchBtn.addEventListener("click", () => {
    if (inputBox.value != "") {
        getWeather(inputBox.value)
    }
})
searchBtnMobile.addEventListener("click", () => {

    if (inputBoxMobile.value != "") {
        getWeather(inputBoxMobile.value)
    }
})
const btnBox = document.querySelector(".btn-box");
btnBox.addEventListener("click", (e) => {
    getWeather(e.target.getAttribute("data-location"))
})
getWeather("London")
const skeletonElement = document.getElementsByClassName("skeleton");
const mainElement = document.getElementsByClassName("mainContent");
