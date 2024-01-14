const weatherInfoE = document.querySelector(".weather-information");
const searchE = document.querySelector(".search-icon");
const errorLocationE = document.querySelector(".invalid-location");
weatherInfoE.classList.add("errors");
errorLocationE.classList.add("errors");

searchE.addEventListener("click", () => {
    const APIKey = '23c650af7e375b04ffb4df2c2ce000be';
    let cityName = document.querySelector(".input-box").value;
    if (cityName === '') {
        alert("Enter Location");
        return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`;

    fetch(url, { method: "GET" }).then((response) => response.json()).then((jsonData) => {
        let locationE = document.querySelector(".locations")
        const imageE = document.querySelector(".weather-image");
        const temperatureE = document.querySelector(".temperature");
        const descriptionE = document.querySelector(".description");
        const humidityE = document.querySelector(".humidity");
        const windSpeedE = document.querySelector(".wind");
        locationE.innerHTML = cityName;
        weatherInfoE.classList.remove("errors");
        errorLocationE.classList.add("errors");
        console.log(jsonData)
        switch (jsonData.weather[0].main) {
            case 'Clear':
                imageE.src = 'https://res.cloudinary.com/doenrp5cl/image/upload/v1704190325/Bright_midday_sun_and_puffy_clouds_in_blue_sky__Sunburst_and_cumulus_clouds_in_sky_-removebg-preview_n4dl7y.png';
                break;
            case 'Rain':
                imageE.src = 'https://res.cloudinary.com/doenrp5cl/image/upload/v1704188935/download-removebg-preview_szxjdk.png';
                break;
            case 'Smoke':
                imageE.src = 'https://res.cloudinary.com/doenrp5cl/image/upload/v1704190741/Premium_PSD___White_clouds_isolated_on_blue_background-removebg-preview_1_szumfj.png';
                break;
            case 'Mist':
                imageE.src = 'https://res.cloudinary.com/doenrp5cl/image/upload/v1704189851/Rain_Cloud_White_Cloud_Fog_Mist_Smoke__Cumulonimbus__Cloud__Fog_PNG_Transparent_Image_and_Clipart_for_Free_Download-removebg-preview_cqscmb.png';
                break;
            case 'Haze':
                imageE.src = 'https://res.cloudinary.com/doenrp5cl/image/upload/v1704190015/Blue_Clouds_PNG_-_Free_Download-removebg-preview_oclq82.png';
                break;
            default:
                imageE.src = 'https://res.cloudinary.com/doenrp5cl/image/upload/v1704189046/Premium_Vector___Glassmorphism_cool_weather-removebg-preview_yl1mlb.png';
                break;
        };
        temperatureE.innerHTML = `${jsonData.main.temp} <sup>o<sub>C</sub></sup`;
        descriptionE.innerHTML = `${jsonData.weather[0].description}`;
        humidityE.innerHTML = `${jsonData.main.humidity}%`;
        windSpeedE.innerHTML = `${jsonData.wind.speed}Km/h`;
    }).catch((error) => {
        weatherInfoE.classList.add("errors");
        errorLocationE.classList.remove("errors");
    });

});