import { useState } from "react";

function App(){

  const [uname , SetName] = useState("");
  const [umobile ,SetMobile] = useState("");
  const [uemail , SetEmail] = useState("");

  function SubmitData(){
    console.log("UserName = "+uname);
    console.log("UserMobile = "+umobile);
    console.log("UserEmail = "+uemail);
  }

  return(
    <>
    <h1>Hayy  Hiii</h1>

     Enter Name  <br />
    <input type="text"  onChange={(event)=>SetName(event.target.value)}/>

   <br /><br />
    Enter Mobile  <br />
    <input type="number" onChange={(event)=>SetMobile(event.target.value)}/>
    
    <br /><br />
    Enter Email  <br />
    <input type="email" onChange={(event)=>SetEmail(event.target.value)}/>

    <br /><br />
    <button onClick={SubmitData}>Submit</button>
    </>
  )
}

export default App;