import store from "../store";
import types from "../types";


const {dispatch} = store;


export const addDebitDetail=(data)=>{
    dispatch({
        type: types.ADD_TO_DEBIT,
        payload: data,
    })
}