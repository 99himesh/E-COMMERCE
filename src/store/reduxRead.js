
// there are four file to create 
// (1)
// action =>index.js
// export const incNumber=()=>{
//     return {
//         type : "INCREAMENT"
//     }
// }

// export const decNumber=()=>{
//     return {
//         type : "DECREAMENT"
//     }
// }


// create a actions 

// (2)

// reducer=>
//       index.js

// (i)
// import {combineReducers} from "redux"
// import changeNumber from "./undown"
// export const rootReducer=combineReducers({
//     changeNumber
// }
// )

// create a rootreducer commbine all  reducer
  
//    or 
// (ii)
// smaller reducer function
//       unknown.js

    //   const initialState=0;

// const changeNumber=(state=initialState,action)=>{
//     switch(action.type){
//         case "INCREAMENT":return state+1;
//         case "DECREAMENT":return state-1;
//         default :return state;;
//     }
    
// }


// export default changeNumber;



// (3)
// store=>
//     index.js
// import { createStore } from "redux";
// import { rootReducer } from "../reducers";

// const store=createStore(rootReducer)

// export default store;





// useSelector, useDispatch to send and get data 

