import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import reducer from "./notesReducer";
import thunk from "redux-thunk";
import notesReducer from "./notesReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    notesReducer,
    authReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))