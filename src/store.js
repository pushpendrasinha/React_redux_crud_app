import { createStore, applyMiddleware } from "redux";
import combineReducers from './services/Reducers/index';
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(combineReducers,
    applyMiddleware(thunk));

export default store;
