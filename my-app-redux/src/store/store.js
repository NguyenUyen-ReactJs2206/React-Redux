import { createStore } from "redux";
import allReducer from "../reducers/reducerIndex";


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.getState();
export default store;
