import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { DashReducer } from "./reducer";

const reducer = combineReducers({
  Dash: DashReducer,
});

const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
