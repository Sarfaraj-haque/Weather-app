const apikey = "72a44d4e084b55bfa91ab77c05617eac";
const weatherData1 = document.getElementById("weather-data");
const cityInput1 = document.getElementById("city-input");
const forem1 = document.querySelector("form");
forem1.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInput1.value;
    getWeatherdata(cityValue);
})
async function getWeatherdata(cityValue){
    try{
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
   if(!response.ok){
    throw new Error("Network response was not ok")
   } 
   const data=await response.json()
const temperature=Math.round(data.main.temp)
const description=data.weather[0].description;
const icon=data.weather[0].icon;
const details=[
    `Feels like:${Math.round(data.main.feels_like)}`,
    `Humidity:${data.main.humidity}%`,
    `Wind Speed:${data.wind.speed} m/s`
]
weatherData1.querySelector(".icon").innerHTML=` <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Sunny icon">`
weatherData1.querySelector(".temperature").textContent=`${temperature}°C`;
weatherData1.querySelector(".description").textContent=description;
weatherData1.querySelector(".details").innerHTML=details.map((detail)=>`<div>${detail}</div>`).join("");

}catch(error){
    weatherData1.querySelector(".icon").innerHTML="";
    weatherData1.querySelector(".temperature").textContent="";
    weatherData1.querySelector(".description").textContent="";
    weatherData1.querySelector(".details").innerHTML="An error happened, please try again later";
    }
}