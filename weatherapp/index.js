
window.getWeather = function () {

    let cityName = document.getElementById("cityName").value;


    //8ec1cd18aec637e2b0a0c34aeb0b868c

    let weather_key = '8ec1cd18aec637e2b0a0c34aeb0b868c'

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weather_key}&units=metric`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.getElementById("result").innerHTML = "weather data successfully recieved"
            document.getElementById("temperature").innerHTML = `Temperature Of <br> ${response.data.name} (${response.data.sys.country}) <br> Is: <br> ${response.data.main.temp}°C`
            document.getElementById("feelsLike").innerHTML = `Feels like: <br> ${response.data.main.feels_like}°C`
            document.getElementById("humidity").innerHTML = `Humidity: <br> ${response.data.main.humidity} g.m-3`
            document.getElementById("wind").innerHTML = `Wind speed: <br> ${((response.data.wind.speed)*3.6).toFixed()} Km/h`
            document.getElementById("visibility").innerHTML = `Visibility: <br> ${(response.data.visibility)*0.001} Km`
            document.getElementById("description").innerHTML = `${response.data.weather['0'].description}`
            document.getElementById("icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${response.data.weather['0'].icon}@2x.png">`
        
        })
        
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.getElementById("result").innerHTML = "Error in fetching data"
        })
}



















