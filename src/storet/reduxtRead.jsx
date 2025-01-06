// thre are  two file 
// store and slice 

// 1
// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from "../feature/counter/counterSlice.js"
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })




// 2.


// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
      
//     },
//     decrement: (state) => {
//       state.value -= 1
//     }
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer


// for use useSelector and useDispatch