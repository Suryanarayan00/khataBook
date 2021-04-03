import types from "../types";

const initialState = {
    userData: {},
    internetConnection: false,
}



export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN: {
            return {
                ...state,
                userData: action.payload,
            }
        }
        case types.NO_INTERNET: {
            return {
                ...state,
                internetConnection: action.payload
            }
        }
        case types.SAVE_VIEW_DATA: {
            console.log(data);
            return {
                ...state
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}