import { useState , useEffect} from "react";

function App(){

  const [name , setnName] = useState("");
  const [mobile , setnMobile] = useState("");
  const [email , setnEmail] = useState("");
  const [data , setData] = useState([]);

  useEffect(()=>{

    console.log("New Data = ",data)

  },[data])

  function submit(){
    
    const newObj = {
      "name":name,
      "mobile":mobile,
      "email":email
    }

    const newData = [...data ,newObj];
    setData(newData)

  }

  return(
    <>
    <h1>React js Day-11</h1>
    <br />

    Enter Student Name <br />
    <input type="text"  onChange={(event)=>setnName(event.target.value)} /> 
    <br /><br />
     Enter Student Mobile <br />
    <input type="number" onChange={(event)=>setnMobile(event.target.value)} /> 
    <br /><br />
     Enter Student Email <br />
    <input type="email"  onChange={(event)=>setnEmail(event.target.value)}/> 
    <br /><br />

    <button onClick={submit}>Submit</button>

    <br /><br />
    

    {data.map((item,index)=>(

    <>
    <table border={1}>
      <tr>
        <th>Name</th>
        <th>Mobile</th>
        <th>Email</th>
      </tr>

      <tr>
        <td>{item.name}</td>
        <td>{item.mobile}</td>
        <td>{item.email}</td>
      </tr>
    </table>
    </>
    
    ))}


    </>
  )
}


export default App;