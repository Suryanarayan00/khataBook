import types from "../types";



const initialState={
    themeColor: '#1493ff',

}


export default function(state=initialState, action){
    switch(action.type){
        case types.CHANGE_THEME_COLOR:{
            console.log(action.payload);
            return{
                ...state,
                themeColor: action.payload,
            }
        }
        default:
            return state
    }
}