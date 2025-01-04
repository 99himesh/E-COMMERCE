import { Avatar } from "antd";
import { NavLink } from "react-router-dom";

const Header=()=>{
    return (
  <>
  <div className="flex justify-between px-5 ">
    <Avatar />
     <div className="flex gap-5">
        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
     </div>
     <div>
        <h3>Logout</h3>
     </div>

  </div>
  </>
    )
}
export default Header;