function search() {
    place = cname.value
    // fetch(`https://restcountries.com/v2/name/${country}?fullText=true`).then(res=>res.json()).then(data=>displaydata(data))
    fetch(` https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5b4bee0ba241d092159faf007e166080`).then(res => res.json()).then(data => displaydata(data))

}





function displaydata(distDetails) {
    pname = cname.value
    temperature = distDetails.main.temp
    weather = distDetails.weather[0].description
    Main = distDetails.weather[0].main
    wind = distDetails.wind.speed
    lattitude = distDetails.coord.lat
    longitude = distDetails.coord.lon
    // Sunrise = distDetails.sys.sunrise
    // Sunset = distDetails.sys.sunset



    htmldata = `  <i class="fa-solid fa-city"></i>   City Name : <span id="cityname" >${pname}</span></p>
      <p><i class="fa-solid fa-temperature-high"></i>   Temperature : <span id="temp">${temperature} K</span></p>
      <p><i class="fa-solid fa-sun"></i>                weather Type : <span id="weather">${weather}</span></p>
      
      <p><i class="fa-solid fa-wind"></i>               Wind Speed : <span id="wind">${wind}</span></p>
      <p> <i class="fa-solid fa-location-dot"></i>      Lattitude: <span id="latt">${lattitude}</span></p>
      <p><i class="fa-solid fa-location-crosshairs"></i> Longitude : <span id="long">${longitude}</span></p>
      
     
      `
      
      


    result.innerHTML = htmldata

    
  }