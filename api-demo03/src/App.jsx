import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [data , setData] = useState()
  const [weather, setWeather] = useState(null);

  function Search(){

     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=1e14db34f5674c0591e7aa87328418c5&units=metric`).then((response) => {
        console.log(response.data);
        setWeather(response.data);
      })

  }

  return (
    <>
      <h1>Check Weather</h1>

      <input type="text" onChange={(e)=>setData(e.target.value)} /> 

      <br /><br />

      <button onClick={Search}>Search</button>

      {weather && (
        <>
          <h2>City: {weather.name}</h2>
          <h3>Temperature: {weather.main.temp}°C </h3>
          <h3>Humidity: {weather.main.humidity}%</h3>
          <h3>Weather: {weather.weather[0].main}</h3>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon"/>
        </>
      )}
    </>
  );
}

export default App;