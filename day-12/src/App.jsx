import { useState , useEffect} from "react";

function App(){

  const [product , setProduct] = useState("");
  const [price , setPrice] = useState(0);
  const [qty , setQty] = useState(0);
  const [data ,setData] = useState([]);
  const [total , setTotal] = useState(0);
  const [totalqty , setTotalQty] = useState(0)

  useEffect(()=>{

    console.log("updated =",data);

    var sum = 0;
    var totalqty = 0;

    for(var i=0 ;i<data.length; i++){
       sum = sum + data[i].total;
       totalqty = totalqty + Number(data[i].qty)
    }

    setTotalQty(totalqty)
    setTotal(sum);

  },[data])

  function saveData(){
    
    const newObj ={
      "product":product,
      "price":price,
      "qty":qty,
      "total":price*qty
    }

    const newData = [...data, newObj];

    setData(newData);

  }

  function removeData(index){

    var newArray = [...data];
    newArray.splice(index,1);

    setData(newArray)

  }

  return(
    <>
    <h1>Welcome</h1>
    <br />

    <table width={"100%"} border={1}>
      <tr>
        <th>product Name </th>
        <th> Price</th>
        <th> QTY</th>
        <th>Total</th>
        <th>Action</th> 
      </tr>

      <tr>
        <td>
          <input type="text"  onChange={(e)=>setProduct(e.target.value)}/>
        </td>
        <td>
          <input type="number"  onChange={(e)=>setPrice(e.target.value)}/>
        </td>
        <td>
          <input type="number" onChange={(e)=>setQty(e.target.value)} />
        </td>
        <td>
          <input type="number" value={price*qty} />
        </td>
        <td>
          <button onClick={saveData}>+</button>
        </td>
      </tr>

      {data.map((item,index)=>(

        <>
        <tr>
          <td>{item.product}</td>
          <td>{item.price}</td>
          <td>{item.qty}</td>
          <td>{item.total}</td>
          <td>
            <button onClick={()=>removeData(index)}>X</button>
          </td>
        </tr>
        </>

      ))}

      <tr>
        <td colSpan={2}>Total</td>
        <td>Qty:{totalqty}</td>
        <td colSpan={2}>Total :{total}</td>
      </tr>

    </table>
    </>
  )
}

export default App;




// useState 
// useEffect

// useRef
//preventDefault
