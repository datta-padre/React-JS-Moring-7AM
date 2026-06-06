import axios from "axios"; // npm i axios
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState();
  const [apidata, setApiData] = useState(null);

  function weather() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e14db34f5674c0591e7aa87328418c5&units=metric`,).then((response) => {
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
          <h1>City Name : {apidata.name}</h1>
          <h1>Temperature :{apidata.main.temp}°C</h1>
        </>
      )}
    </>
  );
}

export default App;

// axios


