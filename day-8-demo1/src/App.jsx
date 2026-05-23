import { useState } from "react";



function App(){

  const [name , SetName] = useState();
  const [arr , SetArr] = useState([]);

  function Submit(){
    
    console.log(name);   //  0 s 
    SetArr(name);        // 1 s 
    console.log(arr)    // 0 s 

  }

  return(
    <>
    <h1>React demo1</h1>

    Enter UserName <br />
    <input type="text" onChange={(event)=>SetName(event.target.value)}/>
    <br  />
    <br />
    <button onClick={Submit}>Submit</button>
    </>
  )
}

export default App;

