import { combineReducers } from "@reduxjs/toolkit";
import  counterSlice  from "./counterReducer";
import  cartSlice  from "./cartReducer";

export default combineReducers({
  counterSlice,
  cartSlice,

});
