import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from './services/Reducers/index';
import thunk from "redux-thunk";
import logger from "./services/Middleware/logger";
import monitorReducerEnhancer from "./services/Enhancers/monitorReducer";

export default function configureStore() {

    // The redux-thunk middleware, which allows simple asynchronous use of dispatch.
    const middleware = applyMiddleware(thunk, logger);
    const composedEnhancers = compose(middleware, monitorReducerEnhancer)

    const store = createStore(combineReducers, composedEnhancers)

    return store
}
