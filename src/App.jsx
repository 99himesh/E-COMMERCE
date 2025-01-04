import { Button} from 'antd';
import { useState } from 'react';
import Cards from './card';
import BgChanger from './bgChanger/BgChanger';
import PasswordGenerator from './passwordGeneRator/Passwordenerator';
import Profile from './pages/Profile';
import UserName from './pages/UserName';
import UserContextProvider from './context/UserContextProvider';
function App() {
const [counter,setCounter]=useState(0);


  const addValue=()=>{
    if(counter<20){
     setCounter(prev=>prev+1)  
     setCounter(prev=>prev+1)  
     setCounter(prev=>prev+1)  
     setCounter(prev=>prev+1)  
     
    
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
const btnTxt={btTxt:"Hello"}
  return (
    <>
    {/* <div className='flex align-center justify-center h-[100vh] flex-col  gap-2 text-center w-[300px] mx-auto'>
    <h3>Counter value: {counter}</h3>

    <button className='bg-blue-400'  onClick={addValue}>Add value{counter}</button>

    <button className='bg-blue-400'   onClick={removeValue}>Remove value{counter}</button>
    </div> */}
{/* <BgChanger/> */}
    {/* <Cards buttonText="Hello Btn" btn={btnTxt}/> */}
    {/* <PasswordGenerator/> */}
    {/* <Header/> */}
    <UserContextProvider>
      
    <Profile/>
    <UserName/>
    </UserContextProvider>
    </>
  )
}

export default App
