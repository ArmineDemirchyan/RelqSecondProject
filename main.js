let weather = {
    "apiKey": "baaf2fd297f31f2f825e9e7891d91a13",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description } = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = " https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText =description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity  + " %";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector("body").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        // document.querySelector(".weather").classList.remove(".loading");
    },
    searchCity: function(){
        this.fetchWeather(document.getElementsByClassName("search-bar")[0].value);
    },
    cityName :document.getElementsByClassName("search-bar")[0].value,
}

    document.querySelector(".search button").addEventListener("click", function(){
        weather.searchCity();
        
    })
    document.querySelector(".search-bar").addEventListener("keyup", function(event){
        if(event.key == "Enter"){
         weather.searchCity();
        }
        
    })

// let weather = {
//     apiKey: "b91558a8d3ab4728a0f114301222807",

//     fetchWeather: function (city) {
//         fetch("https://api.weatherapi.com/v1/current.json?key="
//             + this.apiKey +
//             "&q="
//             + city +
//             "&aqi=no"
//         )
//         .then((response) => response.json())
//         .then((data) => this.displayWeather(data)); 
//     }
// }