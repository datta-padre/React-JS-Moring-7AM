import { useState } from "react";

function App(){

const [name , SetName] = useState("");

  return(
    <>
    <h1>Welcome to React </h1>

    <input type="text" onKeyUp={(event)=>SetName(event.target.value)}/>

    <br /><br />
    <p>Hiii {name}</p>
    </>
  )
}

export default App;