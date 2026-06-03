import axios  from "axios";// npm i axios
import { useEffect } from "react";

function App(){

  useEffect(()=>{

    axios.get('https://dummyjson.com/quotes').then((response)=>{

      console.log("response data",response.data);

    })

  },[]);

  return(
    <>
    <h1>Welcome</h1>
    </>
  )
}

export default App;