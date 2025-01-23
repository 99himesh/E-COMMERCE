
//   import React, { useState } from "react"
// function App() {
//  const [data,setData]=useState([])
//  const [input ,setInput]=useState("")
//  console.log(input)
//  const addTodosHandler=()=>{
//   if(!input) return
//     setData([...data,input])
//     setInput("")

//  }

//  const deleteHandler=(id)=>{  
//   const copy=[...data]
//   copy.splice(id,1);
//   setData(copy)
//  }
//  const editHandler=(id)=>{
//   const copy=[...data];
//   setInput(copy[id])
//   copy.splice(id,1,input)

//   setData(copy)  
  

//  }
//   const buttonStyle={background:"blue",padding:"5px 20px" ,borderRadius:"5px"}
//  const styleCommon={width:"30%",margin:"0 auto"}
//   return (
//     <>
//     <div style={{...styleCommon,padding:"10px 0",display:"flex",gap:"10px"}}>
//     <input
//     value={input}
//     style={{border:"1px solid",padding:"5px 10px",borderRadius:"5px"}}
//     type="text"
//     placeholder="Enter Todo"
//     onChange={(e)=>{setInput(e.target.value)}}
//     />
//     <button style={buttonStyle} onClick={()=>{addTodosHandler()}}>Add</button>

//     </div>

//   {data?.map((item,idx)=>(
//     <div  style={{...styleCommon,display:"flex",gap:"20px",padding:"10px 0",alignItems:"center"}} >
//     <div key={idx}>{idx+1} . {item}</div>
//     <div style={{display:"flex",gap:"20px"}}>
//      <button onClick={()=>{deleteHandler(idx)}} style={buttonStyle}>delete</button>
//      <button onClick={()=>{editHandler(idx)}}  style={buttonStyle}>Edit</button>
//     </div>
//     </div>  
//   ))}
   
   
//     </>
//   )
// }

// export default App



























// // import { Button} from 'antd';
// // import { useEffect, useState } from 'react';
// // import Cards from './card';
// // import BgChanger from './bgChanger/BgChanger';
// // import PasswordGenerator from './passwordGeneRator/Passwordenerator';
// // import Profile from './pages/Profile';
// // import UserName from './pages/UserName';
// // import UserContextProvider from './context/UserContextProvider';
// // import Counter from './counter/Counter';
// // function App() {
// //   const [input,setinput]=useState("")
// //   const [datas,setDatas]=useState([])
// //   const [prev,setPrev]=useState(0)
// //   const [next,setNext]=useState(10)
// //   const searchData=datas.filter((item)=>item.title.includes(input))
// //   const pagenateData=searchData.slice(prev,next);
  
// //   console.log(pagenateData,"pagenateData")

// //   const prevHandler=()=>{
// //     if(prev === 0) return

// //     setNext(next=>next-10);
// //     setPrev(prev=>prev-10);
// //   }

  
// //   const nextHandler=()=>{
// //     if(next === datas.length) return
// //     setNext(next=>next+10);
// //     setPrev(prev=>prev+10);
// //   }
  


// //   const  getData=async()=>{
// //   const res=await fetch("https://jsonplaceholder.typicode.com/todos");
// //   const data=await res.json();
// //   console.log(data)
// //   setDatas(data) 
// //   }
// //   useEffect(()=>{
// //   const db=  setTimeout(()=>{
// //       getData()
// //     },2000)

// //     return ()=> clearTimeout(db)
  
// //   },[input])

// //   return (
// //     <>
// //     <div  style={{display:"flex",justifyContent:"start",width:"40%",margin:"0 auto" }}>
// //    <input type='text'   onChange={(e)=>{setinput(e.target.value)}}/>

// //    </div>
// //     {pagenateData.map((item,idx)=>(
// //     <div key={idx} style={{display:"flex",justifyContent:"start",width:"40%",margin:"0 auto" }}>
// //       <h2>{item.id}.   {"   "}</h2>
// //       <h3>{item.title}</h3>
      
// //     </div>
// //     ))}
// //     <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
// //     <button style={{background:"red", padding:"5px 10px"}} onClick={()=>{prevHandler()}}>Prev</button>
// //     <button style={{background:"red", padding:"5px 10px"}}   onClick={()=>{nextHandler()}}>next</button>
// //     </div>

   
// //     </>
// //   )
// // }

// // export default App
