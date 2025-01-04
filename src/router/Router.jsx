import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Layout from "../Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ContactDetails from "../pages/ContactDetails";
import Home from "../pages/Home";

// export  const router=createBrowserRouter(
//     [
//       {
//         path:"/",
//         element:<Layout/>,
//         children:[
//           {
//             path:"",
//             element:<Home/>
//           },
//           {
//             path:"about",
//             element:<About/>
//           },
//           {
//             path:"contact",
//             element:<Contact/>,
          
//           },
//           {
//             path:"contact/:id",
//             element:<ContactDetails/>
//           }
        
//         ]
//       }
//     ])


export const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="contact/:id" element={<ContactDetails/>}></Route>
     </Route>
  )
)