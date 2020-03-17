import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);
const store = createStore(rootReducer, {}, middlewareEnhancer);
export default store;
