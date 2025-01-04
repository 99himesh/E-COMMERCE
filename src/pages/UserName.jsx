import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserName=()=>{
    const {User}=useContext(UserContext)

    if(!User) return <p className="text-center">Please enter user</p>
    
   return(
   <>
   <h1 className="text-center pt-3">User: {User}</h1>
   
   </> 
   )
}

export default UserName;