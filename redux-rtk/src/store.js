import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
store.getState();
export default store;
