import { combineReducers } from "redux";
import CartReducer from "./../Components/Cart/reducer";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({CounterReducer1:CounterReducer, shop:CartReducer});

export default rootReducer;