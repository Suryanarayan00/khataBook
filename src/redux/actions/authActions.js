import { OPT_VERIFICATION_API, PHONE_API } from "../../config/urls";
import { apiPost, clearUserData, setUserData } from "../../utils/utils";
import store from "../store";
import types from "../types";



const {dispatch} = store;

export const saveUserData=(data)=>{
    dispatch({
        type: types.LOGIN,
        payload: data,
    })
}


export const clearReduxState=()=>{
    dispatch({
        type: types.CLEAR_REDUX_STATE,
        payload: {},
    })
}

export const logout=()=>{
    clearUserData().then(res=>{
        clearReduxState();
    }).catch(error=> console.log(error))
}


export const loginUsingPhone = (data) => {
    return apiPost(PHONE_API, data)
}

export const otpVerification = (data) => {
    return new Promise((resolve, reject) => {
        apiPost(OPT_VERIFICATION_API, data).then((res) => {
            setUserData(res.data).then((res) => {
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

