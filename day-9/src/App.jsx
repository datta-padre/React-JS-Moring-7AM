
import { useState , useEffect } from "react";

function App(){

  const [userName , setUserName] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{

    console.log("New Data = ", data);

  },[data]);

  function submit(){

    console.log(userName);    
    const newArrya = [...data,userName];
    setData(newArrya);        
  }

  return(
    <>
    <h1>Welcome Back</h1>
    <br /><br />
    Enter UserName <br />
    <input type="text" onChange={(e)=>setUserName(e.target.value)} />
    <br /><br />
    <button onClick={submit}>Submit</button>
    <br /><br />

    </>
  )
}


export default App;







