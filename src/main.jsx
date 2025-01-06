  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import {  RouterProvider } from 'react-router-dom'
  import { router } from './router/Router.jsx'
  import App from './App.jsx'
  // import store from './store/index.js';
  import {Provider } from "react-redux";
  import { store } from './storet/index.js'
// import { store } from './app/store.js'



  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
      <App/>
      </Provider>
      {/* <RouterProvider router={router}/> */}
    </StrictMode>,
  )
