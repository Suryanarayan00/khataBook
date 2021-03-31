import types from "../types";



initialState = {
    creditData: [],
};


export default function (state = initialState, action) {

    let { creditData } = state;
    switch (action.type) {
        case types.ADD_TO_CREDIT: {
            return {
                ...state,
                creditData: [...creditData, action.payload],
            }
        }
        case types.EDIT_CREDIT: {
            let { index } = action.payload
            let updatedDebit = [...creditData];
            updatedDebit[index] = updatedDebit[index];


            return {
                ...state,
                creditData: updatedDebit,
            }
        }
        case types.DELETE_CREDIT: {
            let { index } = action.payload;
            let updatedDebit = [...creditData];
            updatedDebit = updatedDebit.filter((value, key) => key != index);

            return {
                ...state,
                creditData: updatedDebit,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}