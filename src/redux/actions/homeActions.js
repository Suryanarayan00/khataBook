import { COMMON_CONV_API, GET_CHAT_API } from "../../config/urls";
import { apiGet } from "../../utils/utils";
import store from "../store"
import types from "../types"


let {dispatch} = store;



export const changeThemeColor=(themeColor)=>{
    dispatch({
        type: types.CHANGE_THEME_COLOR,
        payload: themeColor
    })
}



export function getChatData(query) {
    return apiGet(`${GET_CHAT_API}${query}`);
}

export function getFullConversation(query){
    return apiGet(`${COMMON_CONV_API}${query}`);
}