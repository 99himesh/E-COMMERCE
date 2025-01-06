import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "../action";
import { decrement, increment } from "../feature/counter/counterSlice";

const Counter =()=>{
    const value=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
   //  console.log(data);
    
     return(
        <>   
        <button onClick={()=>{dispatch(increment())}} className="bg-blue-400 px-3 py-2 rounded">+</button>
        {value}
        <button   onClick={()=>{dispatch(decrement())}} className="bg-blue-400 px-3 py-2 rounded">-</button>
        </>

     )
}
export default Counter;