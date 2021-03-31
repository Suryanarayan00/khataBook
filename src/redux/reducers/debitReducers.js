import types from "../types";



initialState = {
    debitData: [],
};


export default function (state = initialState, action) {

    let { debitData } = state;
    switch (action.type) {
        case types.ADD_TO_DEBIT: {
            return {
                ...state,
                debitData: [...debitData, action.payload],
            }
        }
        case types.EDIT_DEBIT: {
            let { index } = action.payload
            let updatedDebit = [...debitData];
            updatedDebit[index] = updatedDebit[index];


            return {
                ...state,
                debitData: updatedDebit,
            }
        }
        case types.DELETE_DEBIT: {
            let { index } = action.payload;
            let updatedDebit = [...debitData];
            updatedDebit = updatedDebit.filter((value, key) => key != index);

            return {
                ...state,
                debitData: updatedDebit,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}