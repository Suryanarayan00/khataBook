import store from "../store"
import types from "../types"


let {dispatch} = store;



export const changeThemeColor=(themeColor)=>{
    dispatch({
        type: types.CHANGE_THEME_COLOR,
        payload: themeColor
    })
}