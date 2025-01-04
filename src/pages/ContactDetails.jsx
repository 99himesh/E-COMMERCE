import { useParams } from "react-router";

const ContactDetails=()=>{
    debugger
    const {id}=useParams();
    console.log(id);
    
    return(
        <>
        <h1>Contact details : {id}</h1>
        </>
    )
}

export default ContactDetails;