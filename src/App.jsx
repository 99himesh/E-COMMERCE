import { Button } from 'antd';
import { useState } from 'react';
function App() {
const [counter,setCounter]=useState(15);


  const addValue=()=>{
    if(counter<20){
     setCounter(counter+1)  
    
    }else{
      return
    }
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)  
 
    }else{
      return;
    }
   }

  return (
    <>
    <div className='flex align-center justify-center h-[100vh] flex-col  gap-2 text-center w-[300px] mx-auto'>
    <h3>Counter value: {counter}</h3>

    <button className='bg-blue-400'  onClick={addValue}>Add value{counter}</button>

    <button className='bg-blue-400'   onClick={removeValue}>Remove value{counter}</button>
    </div>
    </>
  )
}

export default App
