import rootReducer from "./reducers/CounterReducer";
import {createStore} from "redux";

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;