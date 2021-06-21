import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../Reducers";

export const store = createStore(reducer, composeWithDevTools());
