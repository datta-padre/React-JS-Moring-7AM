import axios from "axios"  // npm i axios 
import { useEffect, useState } from "react"

function App() {

  const [pincode , setPincode ] = useState()
  const [apidata, setApidata ]  = useState([]);

  function search_pincode(){

    axios.get("https://api.postalpincode.in/pincode/"+pincode).then((response)=>{

      console.log(response.data[0].PostOffice)
      setApidata(response.data[0].PostOffice)

    })

  }

  return (
    <>
     <input type="number"  onChange={(e)=>setPincode(e.target.value)}/>
     <br /><br />
     <button  onClick={search_pincode}>Search Pincode</button>

     <br /><br />

     <table width="100%" border={1}>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>BranchType</th>
        <th>DeliveryStatus</th>
        <th>Circle</th>
        <th>District</th>
        <th>Division</th>
        <th>Region</th>
        <th> Block</th>
        <th> State</th>
        <th>Country</th>
      </tr>

    {apidata.map((val,i)=>(

      <tr>
         <td>{val.Name}</td>
        <td>{val.Description}</td>
        <td>{val.BranchType}</td>
        <td>Delivery</td>
        <td>Maharashtra</td>
        <td>Ahmed Nagar</td>
        <td>Ahmednagar</td>
        <td>Ahmednagar</td>
        <td>Ahmednagar</td>
        <td>Ahmednagar</td>
        <td>Ahmednagar</td>
      </tr>

    ))}

     </table>
    </>
  )
}

export default App
