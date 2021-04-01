import { combineReducers } from "redux";
import types from "../types";
import authReducers from "./authReducers";
import creditReducers from "./creditReducers";
import debitReducers from "./debitReducers";
import homeReducers from "./homeReducers";


const appReducer = combineReducers({
    authReducers,
    homeReducers,
    creditReducers,
    debitReducers,
});

const rootReducer = (state, action)=>{
    if(action.type==types.CLEAR_REDUX_STATE){
        state=undefined;
    }
    return appReducer(state, action)
}
export default rootReducer;
