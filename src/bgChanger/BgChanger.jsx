import { useState } from "react";

const BgChanger=()=>{
    const [color,setColor]=useState("yellow")
    return(
        <div className="reative h-[100vh]" style={{background:color}}>
         <div className=" absolute bottom-12 flex felx-wrap  justify-center w-full    ">
            <div className="flex gap-3 bg-[#fff] px-5 py-3 rounded-full">
               <div> 
                <button onClick={()=>{setColor("red")}} className="px-8 py-2 bg-[red] rounded-full text-[#fff]">Red</button>
               </div>
               <div> 
                <button  onClick={()=>{setColor("green")}} className="px-8 py-2 bg-[green] rounded-full text-[#fff]">Green</button>
               </div>
               <div> 
                <button  onClick={()=>{setColor("black")}} className="px-8 py-2 bg-[black] rounded-full text-[#fff]">Black</button>
               </div>
               <div> 
                <button  onClick={()=>{setColor("Yellow")}} className="px-8 py-2 bg-[yellow] rounded-full text-[#fff]">Black</button>
               </div>
               <div> 
                <button  onClick={()=>{setColor("gray")}} className="px-8 py-2 bg-[gray] rounded-full text-[#fff]">Black</button>
               </div>
            </div>
         </div>
        </div>
    )
}
export default BgChanger;