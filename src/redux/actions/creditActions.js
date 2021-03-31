import store from "../store";
import types from "../types";


const {dispatch} = store;

export const addCreditdetail=(data)=>{
    dispatch({
        type: types.ADD_TO_CREDIT,
        payload: data
    })
}