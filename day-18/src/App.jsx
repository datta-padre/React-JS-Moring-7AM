import axios from "axios"; // npm i axios
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState();
  const [apidata, setApiData] = useState(null);

  function weather() {
    axios.get(`https://api.weatherstack.com/current?access_key=3f65d0cc7d85ad5746ab08effe0fea9c&query=${city}`,).then((response) => {
        console.log("response", response.data);
        setApiData(response.data);
      });
  }

  return (
    <>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <br />
      <br />
      <button onClick={weather}>Click Me...!</button>

      <br />
      <br />

   {apidata && (
  <>
    <h2>{apidata.location.name}</h2>
    <h3>{apidata.current.temperature}°C</h3>

    <img
      src={apidata.current.weather_icons[0]}
      alt="Weather Icon"
    />

    <p>{apidata.current.weather_descriptions[0]}</p>
  </>
)}

    </>
  );
}

export default App;

// axios


{apidata  && () }

