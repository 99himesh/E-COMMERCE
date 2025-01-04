import { Button } from "antd";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Profile=()=>{
    const [data,setData]=useState("")
    const {setUser}=useContext(UserContext)
    
    return(
        <div className="flex justify-center  pt-5">
        <div >
            <input 
            className="border px-2 py-1 rounded-l-md"
            type="text"
            placeholder="Enter your name"
            onChange={(e)=>{setData(e.target.value)}}
            />
            <Button onClick={()=>{setUser(data)}} className="px-5" type="primary">
                Save
            </Button>

        </div>
        </div>
    )
}
export default Profile;