// The react  router dom is third party liberary and used for routing 

// install react-router-dom
// go to main.jsx

    //   instead of <App> write 
    //   <RouterProvider router={router}/>

    // create a file router 


    // and set the routing  . we can set in twon ways 
    // export const router=createBrowserRouter(
    //     createRoutesFromElements(
    //       <Route path="/" element={<Layout/>}>
    //         <Route path="" element={<Home/>}></Route>
    //         <Route path="about" element={<About/>}></Route>
    //         <Route path="contact" element={<Contact/>}></Route>
    //         <Route path="contact/:id" element={<ContactDetails/>}></Route>
    //        </Route>
    //     )
    //   )


    // or 
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