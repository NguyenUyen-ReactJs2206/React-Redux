import { combineReducers } from "redux";
import hobbyReducer from "./hobby";

// reducers/index.js (ROOT)
const allReducer = combineReducers({
    hobbyReducer: hobbyReducer,
    })
    export default allReducer;