import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "../action";

const Counter =()=>{
    const data=useSelector(state=>state.changeNumber)
    const dispatch=useDispatch()
    console.log(data);
    
     return(
        <>   
        <button onClick={()=>{dispatch(incNumber())}} className="bg-blue-400 px-3 py-2 rounded">+</button>
        {data}
        <button   onClick={()=>{dispatch(decNumber())}} className="bg-blue-400 px-3 py-2 rounded">-</button>
        </>

     )
}
export default Counter;