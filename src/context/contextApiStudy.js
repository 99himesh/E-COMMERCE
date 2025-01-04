// frst create a context
// userContext file 

            // import React from "react";

                        
            // const UserContext=React.createContext();

            // export default UserContext;


// create a provider

            // import React, { Children, useState } from "react";
            // import UserContext from "./UserContext";
            // const UserContextProvider=({children})=>{
            //     const [User,setUser]=useState(null)
            //     return(
            //       <>
            //       <UserContext.Provider value={{User,setUser}}  >
            //       {children}
            //       </UserContext.Provider>
            //       </>
            //     )
            // }
            // export default UserContextProvider;



//  if you want  to send or recieve data by useContext hook 


// if you send data then use Setter that is define in provider
        //  const {setUser}=useContext(UserContext)


// if you get  data then use getter  that is define in provider
        //  const {user}=useContext(UserContext)
  