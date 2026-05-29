import  {useState ,useEffect} from 'react'

function App(){

  const [uname , setName] = useState("")
  const [umobile , setMobile] = useState();
  const [uemail , setEmail] = useState("")
  const [data , setData] = useState([])

  useEffect(()=>{

    console.log("new data ",data)

  },[data]);

  function printdata(){
    
    const newObj = {
      "userName":uname,
      "userMobile":umobile,
      "userEmail":uemail
    }

    const newData = [...data , newObj]
    setData(newData);

  }

  return(
    <>
    <h1>React js Day-10</h1>
    <br /><br />
    Enter UserName <br />
    <input type="text"  onChange={(event)=>setName(event.target.value)}/>
    <br /><br />
    Enter UserMobile <br />
    <input type="number"  onChange={(event)=>setMobile(event.target.value)}/>
    <br /><br />
     Enter UserEmail <br />
    <input type="email"  onChange={(event)=>setEmail(event.target.value)}/>
    <br /><br />

    <button onClick={printdata}>Submit</button>
    </>
  )
}

export default App;