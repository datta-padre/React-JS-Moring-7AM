import { useState } from "react"
import axios from "axios";

function App() {

  const [user_name , setUserName] = useState();
  const [user_mobile , setUserMobile] = useState()
  const [user_email , setUserEmail] = useState()
  const [user_password , setUserPassword ] = useState()

  function create_account(){

    var obj ={
       "user_name":user_name ,
       "user_mobile":user_mobile,
       "user_email":user_email,
       "user_password":user_password
      }

      axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((response)=>{

        console.log("response", response.data)

      })

  }

  return (
    <>
    <h1>Welcome' Create New Account</h1>
    <br />
    Enter Name 
    <input type="text" onChange={(e)=>setUserName(e.target.value)}/><br /><br />
    Enter Mobile 
    <input type="number"  onChange={(e)=>setUserMobile(e.target.value)}/> <br /><br />
    Enter Email 
    <input type="email" onChange={(e)=>setUserEmail(e.target.value)}/><br /><br />
    Enter Password 
    <input type="password"  onChange={(e)=>setUserPassword(e.target.value)}/> <br /><br />

    <button onClick={create_account}>Submit </button>
    </>
  )
}

export default App
