import {createStore, combineReducers, applyMiddleware} from "redux";
import loaderMiddleware from "./middlewares/loaderMiddleware";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";

const store = createStore(combineReducers(reducers), applyMiddleware(loaderMiddleware, ReduxThunk));

export default store;