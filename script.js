    const apiKey = "70e79ecd38af8459cc9a56ba74145e5d";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".wheather-icon");

    

    async function checkWheather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            alert("Invalid City name!!");
            document.querySelector(".wheather").style.display = "none";
        }else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "assets/images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "assets/images/clear.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "assets/images/rain.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "assets/images/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "assets/images/mist.png"
        }else{
            weatherIcon.src = "assets/images/snow.png"
        }

        document.querySelector(".wheather").style.display = "block";
         }
    }

    searchBtn.addEventListener("click", ()=>{
        checkWheather(searchBox.value);
    })
    
    
