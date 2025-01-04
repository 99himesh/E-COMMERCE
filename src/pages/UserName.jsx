import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserName=()=>{
    const {User}=useContext(UserContext)
    
   return(
   <>
   <h1 className="text-center pt-3">User: {User}</h1>
   
   </> 
   )
}

export default UserName;