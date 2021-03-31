import { combineReducers } from "redux";
import types from "../types";
import authReducers from "./authReducers";
import creditReducers from "./creditReducers";
import debitReducers from "./debitReducers";



const appReducer = combineReducers({
    authReducers,
    creditReducers,
    debitReducers,
});

const rootReducer = (state, action)=>{
    if(action.types==types.CLEAR_REDUX_STATE){
        state=undefined;
    }
    return appReducer(state, action)
}
export default rootReducer;
