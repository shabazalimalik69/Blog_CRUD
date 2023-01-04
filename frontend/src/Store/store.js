import {combineReducers, legacy_createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import blogReducer from "./blog/blogReducer";

const rootReducer = combineReducers({
    blog:blogReducer,
})
const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer,createCompose(applyMiddleware(thunk)))