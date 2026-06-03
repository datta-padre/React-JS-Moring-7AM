import axios from "axios";
import { useEffect ,useState} from "react";

function App(){

  const [data, setData] = useState([]);


  useEffect(()=>{

    axios.get("https://a2zithub.org/dairy/abi/slider_det").then((response)=>{

      console.log(response.data)
      setData(response.data)

    })

  },[])

  return(
    <>
    <h1>Demo For Axios</h1>

    <table border={1}>

    {data.map((item,index)=>(
      <>

      <tr>
        <td>{item.slider_tbl_id}</td>
        <td>
          <button>
            <a href={item.slider_btn}>click me</a>
          </button>
        </td>
        <td>{item.slider_head}</td>
        <td>
          <img src={item.slider_img} width="100px" alt="" />
        </td>
      </tr>
      </>
    ))}

    </table>
    </>
  )
}

export default App;