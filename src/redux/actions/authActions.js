import { OPT_VERIFICATION_API, PHONE_API } from "../../config/urls";
import { apiPost, setUserData } from "../../utils/utils";
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


export const loginUsingPhone = (data) => {
    console.log(data, 'phone data');
    return new Promise((resolve, reject) => {
        apiPost(PHONE_API, data).then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error)
        })
    })
}

export const otpVerification = (data) => {
    console.log(data, 'otp verification')
    return new Promise((resolve, reject) => {
        apiPost(OPT_VERIFICATION_API, data).then((res) => {
            console.log(res.data, '@@@@@@@api post ')
            setUserData(res.data).then((res) => {
                console.log(res, '@@@@@@@res and setUserData')
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

