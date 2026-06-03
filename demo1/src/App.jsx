import { useEffect } from "react";

function App(){

  useEffect(()=>{

    console.log("UseEffct Running...!")

  },[])

  return(
    <>
       Demo 1 
    </>
  )
}

export default App;