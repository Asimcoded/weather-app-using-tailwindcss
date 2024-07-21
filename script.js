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

let dataS2 = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1721552400,
            "main": {
                "temp": 27.09,
                "feels_like": 30.77,
                "temp_min": 27.09,
                "temp_max": 27.28,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1001,
                "humidity": 88,
                "temp_kf": -0.19
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.13,
                "deg": 237,
                "gust": 11.78
            },
            "visibility": 9036,
            "pop": 1,
            "rain": {
                "3h": 5.73
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-21 09:00:00"
        },
        {
            "dt": 1721563200,
            "main": {
                "temp": 26.94,
                "feels_like": 30.56,
                "temp_min": 26.91,
                "temp_max": 26.94,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 90,
                "temp_kf": 0.03
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.82,
                "deg": 239,
                "gust": 12.43
            },
            "visibility": 5692,
            "pop": 1,
            "rain": {
                "3h": 4.84
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-21 12:00:00"
        },
        {
            "dt": 1721574000,
            "main": {
                "temp": 27.15,
                "feels_like": 30.94,
                "temp_min": 27.15,
                "temp_max": 27.15,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1003,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.52,
                "deg": 233,
                "gust": 12.87
            },
            "visibility": 6957,
            "pop": 1,
            "rain": {
                "3h": 7.19
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-21 15:00:00"
        },
        {
            "dt": 1721584800,
            "main": {
                "temp": 27.58,
                "feels_like": 31.88,
                "temp_min": 27.58,
                "temp_max": 27.58,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1003,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.83,
                "deg": 238,
                "gust": 11.92
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.34
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-21 18:00:00"
        },
        {
            "dt": 1721595600,
            "main": {
                "temp": 27.39,
                "feels_like": 31.36,
                "temp_min": 27.39,
                "temp_max": 27.39,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.9,
                "deg": 240,
                "gust": 12.33
            },
            "visibility": 5543,
            "pop": 1,
            "rain": {
                "3h": 2.04
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-21 21:00:00"
        },
        {
            "dt": 1721606400,
            "main": {
                "temp": 27.4,
                "feels_like": 31.38,
                "temp_min": 27.4,
                "temp_max": 27.4,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1002,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.16,
                "deg": 243,
                "gust": 12.39
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 3.8
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-22 00:00:00"
        },
        {
            "dt": 1721617200,
            "main": {
                "temp": 27.27,
                "feels_like": 31.15,
                "temp_min": 27.27,
                "temp_max": 27.27,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1004,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.97,
                "deg": 250,
                "gust": 12.23
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 4.6
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-22 03:00:00"
        },
        {
            "dt": 1721628000,
            "main": {
                "temp": 27.54,
                "feels_like": 31.63,
                "temp_min": 27.54,
                "temp_max": 27.54,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1004,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.59,
                "deg": 234,
                "gust": 11.94
            },
            "visibility": 8100,
            "pop": 1,
            "rain": {
                "3h": 3.09
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-22 06:00:00"
        },
        {
            "dt": 1721638800,
            "main": {
                "temp": 27.48,
                "feels_like": 31.6,
                "temp_min": 27.48,
                "temp_max": 27.48,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.06,
                "deg": 247,
                "gust": 12.49
            },
            "visibility": 9854,
            "pop": 1,
            "rain": {
                "3h": 3.02
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-22 09:00:00"
        },
        {
            "dt": 1721649600,
            "main": {
                "temp": 27.75,
                "feels_like": 32.2,
                "temp_min": 27.75,
                "temp_max": 27.75,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.87,
                "deg": 248,
                "gust": 11.6
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.95
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-22 12:00:00"
        },
        {
            "dt": 1721660400,
            "main": {
                "temp": 27.7,
                "feels_like": 32.21,
                "temp_min": 27.7,
                "temp_max": 27.7,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1005,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.53,
                "deg": 241,
                "gust": 12.63
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-22 15:00:00"
        },
        {
            "dt": 1721671200,
            "main": {
                "temp": 27.57,
                "feels_like": 31.85,
                "temp_min": 27.57,
                "temp_max": 27.57,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.77,
                "deg": 235,
                "gust": 12.94
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.72
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-22 18:00:00"
        },
        {
            "dt": 1721682000,
            "main": {
                "temp": 27.52,
                "feels_like": 31.58,
                "temp_min": 27.52,
                "temp_max": 27.52,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1004,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.89,
                "deg": 242,
                "gust": 13.09
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.57
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-22 21:00:00"
        },
        {
            "dt": 1721692800,
            "main": {
                "temp": 27.46,
                "feels_like": 31.42,
                "temp_min": 27.46,
                "temp_max": 27.46,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.16,
                "deg": 239,
                "gust": 12.94
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.62
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-23 00:00:00"
        },
        {
            "dt": 1721703600,
            "main": {
                "temp": 27.6,
                "feels_like": 31.79,
                "temp_min": 27.6,
                "temp_max": 27.6,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.55,
                "deg": 235,
                "gust": 12.03
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.1
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-23 03:00:00"
        },
        {
            "dt": 1721714400,
            "main": {
                "temp": 27.67,
                "feels_like": 31.98,
                "temp_min": 27.67,
                "temp_max": 27.67,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.59,
                "deg": 236,
                "gust": 11.95
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.96
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-23 06:00:00"
        },
        {
            "dt": 1721725200,
            "main": {
                "temp": 27.63,
                "feels_like": 31.87,
                "temp_min": 27.63,
                "temp_max": 27.63,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.11,
                "deg": 242,
                "gust": 11.3
            },
            "visibility": 6354,
            "pop": 1,
            "rain": {
                "3h": 2.09
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-23 09:00:00"
        },
        {
            "dt": 1721736000,
            "main": {
                "temp": 28.21,
                "feels_like": 32.3,
                "temp_min": 28.21,
                "temp_max": 28.21,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1003,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.79,
                "deg": 253,
                "gust": 12.08
            },
            "visibility": 9441,
            "pop": 1,
            "rain": {
                "3h": 1.95
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-23 12:00:00"
        },
        {
            "dt": 1721746800,
            "main": {
                "temp": 28.03,
                "feels_like": 32.33,
                "temp_min": 28.03,
                "temp_max": 28.03,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.77,
                "deg": 246,
                "gust": 11.64
            },
            "visibility": 7125,
            "pop": 1,
            "rain": {
                "3h": 3.15
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-23 15:00:00"
        },
        {
            "dt": 1721757600,
            "main": {
                "temp": 27.53,
                "feels_like": 31.74,
                "temp_min": 27.53,
                "temp_max": 27.53,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1004,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.98,
                "deg": 252,
                "gust": 11.97
            },
            "visibility": 6795,
            "pop": 1,
            "rain": {
                "3h": 4.68
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-23 18:00:00"
        },
        {
            "dt": 1721768400,
            "main": {
                "temp": 27.58,
                "feels_like": 31.74,
                "temp_min": 27.58,
                "temp_max": 27.58,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.15,
                "deg": 253,
                "gust": 14.05
            },
            "visibility": 9295,
            "pop": 1,
            "rain": {
                "3h": 5.26
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-23 21:00:00"
        },
        {
            "dt": 1721779200,
            "main": {
                "temp": 27.61,
                "feels_like": 31.82,
                "temp_min": 27.61,
                "temp_max": 27.61,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1002,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.9,
                "deg": 241,
                "gust": 14.53
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.36
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-24 00:00:00"
        },
        {
            "dt": 1721790000,
            "main": {
                "temp": 27.58,
                "feels_like": 31.74,
                "temp_min": 27.58,
                "temp_max": 27.58,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.82,
                "deg": 236,
                "gust": 14.7
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.45
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-24 03:00:00"
        },
        {
            "dt": 1721800800,
            "main": {
                "temp": 27.78,
                "feels_like": 31.99,
                "temp_min": 27.78,
                "temp_max": 27.78,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.1,
                "deg": 232,
                "gust": 14.93
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.69
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-24 06:00:00"
        },
        {
            "dt": 1721811600,
            "main": {
                "temp": 27.29,
                "feels_like": 31.09,
                "temp_min": 27.29,
                "temp_max": 27.29,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 12.22,
                "deg": 238,
                "gust": 15.26
            },
            "visibility": 6931,
            "pop": 1,
            "rain": {
                "3h": 2.96
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-24 09:00:00"
        },
        {
            "dt": 1721822400,
            "main": {
                "temp": 26.96,
                "feels_like": 30.12,
                "temp_min": 26.96,
                "temp_max": 26.96,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.23,
                "deg": 250,
                "gust": 14.41
            },
            "visibility": 8294,
            "pop": 1,
            "rain": {
                "3h": 3.85
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-24 12:00:00"
        },
        {
            "dt": 1721833200,
            "main": {
                "temp": 27.1,
                "feels_like": 30.17,
                "temp_min": 27.1,
                "temp_max": 27.1,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1003,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.32,
                "deg": 263,
                "gust": 14.69
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.12
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-24 15:00:00"
        },
        {
            "dt": 1721844000,
            "main": {
                "temp": 27.86,
                "feels_like": 31.32,
                "temp_min": 27.86,
                "temp_max": 27.86,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1003,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.04,
                "deg": 245,
                "gust": 11.73
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.21
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-24 18:00:00"
        },
        {
            "dt": 1721854800,
            "main": {
                "temp": 27.62,
                "feels_like": 31.3,
                "temp_min": 27.62,
                "temp_max": 27.62,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 1000,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.21,
                "deg": 236,
                "gust": 12.98
            },
            "visibility": 7068,
            "pop": 1,
            "rain": {
                "3h": 2.53
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-24 21:00:00"
        },
        {
            "dt": 1721865600,
            "main": {
                "temp": 27.49,
                "feels_like": 31.5,
                "temp_min": 27.49,
                "temp_max": 27.49,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 1000,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.55,
                "deg": 237,
                "gust": 13.91
            },
            "visibility": 5699,
            "pop": 1,
            "rain": {
                "3h": 5.84
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-25 00:00:00"
        },
        {
            "dt": 1721876400,
            "main": {
                "temp": 27.35,
                "feels_like": 31.25,
                "temp_min": 27.35,
                "temp_max": 27.35,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1002,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.76,
                "deg": 237,
                "gust": 14.6
            },
            "visibility": 9507,
            "pop": 1,
            "rain": {
                "3h": 4.96
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-25 03:00:00"
        },
        {
            "dt": 1721887200,
            "main": {
                "temp": 27.83,
                "feels_like": 32.12,
                "temp_min": 27.83,
                "temp_max": 27.83,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1002,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.47,
                "deg": 238,
                "gust": 15
            },
            "visibility": 5950,
            "pop": 1,
            "rain": {
                "3h": 5.22
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-25 06:00:00"
        },
        {
            "dt": 1721898000,
            "main": {
                "temp": 27.54,
                "feels_like": 31.36,
                "temp_min": 27.54,
                "temp_max": 27.54,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.16,
                "deg": 241,
                "gust": 14.41
            },
            "visibility": 7157,
            "pop": 1,
            "rain": {
                "3h": 5.72
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-25 09:00:00"
        },
        {
            "dt": 1721908800,
            "main": {
                "temp": 27.39,
                "feels_like": 31.23,
                "temp_min": 27.39,
                "temp_max": 27.39,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 1001,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.27,
                "deg": 251,
                "gust": 13.98
            },
            "visibility": 4274,
            "pop": 1,
            "rain": {
                "3h": 5.45
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-25 12:00:00"
        },
        {
            "dt": 1721919600,
            "main": {
                "temp": 27.52,
                "feels_like": 31.58,
                "temp_min": 27.52,
                "temp_max": 27.52,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1002,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.87,
                "deg": 244,
                "gust": 13.15
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 6.07
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-25 15:00:00"
        },
        {
            "dt": 1721930400,
            "main": {
                "temp": 27.74,
                "feels_like": 32.32,
                "temp_min": 27.74,
                "temp_max": 27.74,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1003,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.25,
                "deg": 246,
                "gust": 12.7
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 3.82
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-25 18:00:00"
        },
        {
            "dt": 1721941200,
            "main": {
                "temp": 27.86,
                "feels_like": 32.66,
                "temp_min": 27.86,
                "temp_max": 27.86,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.52,
                "deg": 245,
                "gust": 12.65
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.36
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-25 21:00:00"
        },
        {
            "dt": 1721952000,
            "main": {
                "temp": 28.03,
                "feels_like": 32.98,
                "temp_min": 28.03,
                "temp_max": 28.03,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.25,
                "deg": 238,
                "gust": 13.52
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.51
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-07-26 00:00:00"
        },
        {
            "dt": 1721962800,
            "main": {
                "temp": 27.99,
                "feels_like": 33.03,
                "temp_min": 27.99,
                "temp_max": 27.99,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 10.62,
                "deg": 240,
                "gust": 14.43
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.29
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-26 03:00:00"
        },
        {
            "dt": 1721973600,
            "main": {
                "temp": 28.15,
                "feels_like": 33.32,
                "temp_min": 28.15,
                "temp_max": 28.15,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 11.31,
                "deg": 233,
                "gust": 14.64
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 4.29
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-07-26 06:00:00"
        }
    ],
    "city": {
        "id": 1275339,
        "name": "Mumbai",
        "coord": {
            "lat": 19.0144,
            "lon": 72.8479
        },
        "country": "IN",
        "population": 1000000,
        "timezone": 19800,
        "sunrise": 1721522494,
        "sunset": 1721569687
    }
}
let dataS = {
    "coord": {
        "lon": 72.8479,
        "lat": 19.0144
    },
    "weather": [
        {
            "id": 502,
            "main": "Rain",
            "description": "heavy intensity rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 26.99,
        "feels_like": 30.6,
        "temp_min": 25.94,
        "temp_max": 26.99,
        "pressure": 1003,
        "humidity": 89,
        "sea_level": 1003,
        "grnd_level": 1002
    },
    "visibility": 550,
    "wind": {
        "speed": 4.12,
        "deg": 250,
        "gust": 9.26
    },
    "rain": {
        "1h": 0.1
    },
    "clouds": {
        "all": 100
    },
    "dt": 1721542044,
    "sys": {
        "type": 1,
        "id": 9052,
        "country": "IN",
        "sunrise": 1721522494,
        "sunset": 1721569687
    },
    "timezone": 19800,
    "id": 1275339,
    "name": "Mumbai",
    "cod": 200
}
function setData(data, forecastData) {
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
    // console.log(date.getDay());

}
setData(dataS, dataS2)