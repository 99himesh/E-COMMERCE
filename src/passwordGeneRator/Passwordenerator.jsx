import { useCallback, useEffect, useState } from "react";


const PasswordGenerator=()=>{
    const [length,setLength]=useState(7);
    const [password,setPassword]=useState("")
    const [number,setNumber]=useState(false);
    const [char,setChar]=useState(false);
   

   const passwordGenerator=useCallback(function(){
       let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       let pass="";
        if(number) str+="0123456789"
       if(char) str+="!#$%&'()*+,-/"
       for(let i=1;i<length;i++){
        let char=Math.floor(Math.random() * str?.length + 1);
        pass=pass+str?.charAt(char);
        setPassword(pass)
       }
   },[password,length,char,number])

   useEffect(()=>{
    passwordGenerator();
   },[length,setPassword,char,number])

    return(
        <div className="bg-[#000] h-[100vh] ">
            <div className="flex items-center h-[100vh]">
        <div className="bg-[#fff] w-[50%] mx-auto p-5 rounded-md  ">
            <h2 className="text-xl text-center font-semibold text-gray-500">Password Changer</h2>
            <div className="flex justify-center pt-3">
             <input 
               type="text"
               readOnly
               value={password}
               placeholder="Enter Password"
               className="py-2 px-1 w-full border rounded-s-md"
             />
             <button className="bg-blue-500 text-[#fff] rounded-r-md px-5 py-2">Copy</button>
             </div>
             <div className="flex gap-10 py-5">
             <div className="flex items-center gap-4 w-[250px]">
                <input
                type="range"
                min={6}
                max={99}
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label>Length : {length}</label>
             </div>
             <div className="flex gap-2">
                <input
                className="cursor-pointer"
                type="checkbox"
                onChange={(e)=>{setNumber(prev=>!prev)}}
                />
                <label>Number</label>
             </div>
             <div className="flex gap-2">
                <input
                type="checkbox"
                className="cursor-pointer"
                onChange={(e)=>{setChar(prev=>!prev)}}
                />
                <label>Character</label>
             </div>
             </div>
        </div>
        </div>
        </div>
    )
}
export default PasswordGenerator;