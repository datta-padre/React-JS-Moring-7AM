import { useState } from "react";

function App(){

  const [name, setName] = useState()
  const [mobile , setMobile] = useState()

  function handlesubmit(e){
    e.preventDefault();
    console.log("Submit Form ...!")
    console.log(name)
    console.log(mobile)

  }

  return(
    <>
    <h1>Welcome to React js</h1>
    <br />

    <form onSubmit={handlesubmit}>
      Enter Name 
      <input type="text"  onChange={(event)=>setName(event.target.value)}/>
      <br /><br />
      Enter Mobile 
      <input type="number"  onChange={(event)=>setMobile(event.target.value)}/>
      <br /><br />
      <button>Submit</button>
    </form>
    </>
  )
}

export default App;