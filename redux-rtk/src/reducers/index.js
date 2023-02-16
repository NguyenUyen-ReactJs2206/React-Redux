import hobbyReducer from "./hobby";
import { combineReducers } from "redux";
import userReducer from "./user";

// tong hop reducers
const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
});
export default rootReducer;
