import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { reducerTasks } from "./reducer/reducerTasks";

const rootReducers = combineReducers({
  tasks: reducerTasks
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));