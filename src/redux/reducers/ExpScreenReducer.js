import { FETCH_EXPENSES_SUCCESS, CLEAN_FORM_DATA, EXPENSES_CHANGE_PROP, FETCH_EXPENSES_FAILED, EXPENSES_EMPTY_ENTRY, FETCH_EXPENSES_STARTED } from "../types"

const initialState = {
    expenses: [],
    pageLoading: false,
    pageError: false,
    idGenerator: 1
}

export const ExpScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXPENSES_STARTED:
            return { ...state, expenses: [], pageLoading: true, pageError: false }
        case FETCH_EXPENSES_SUCCESS:
            return { ...state, expenses: [...action.payload], pageError: false, pageLoading: false }
        case EXPENSES_CHANGE_PROP:
            return { ...state, ...action.payload, pageError: state.pageError === true  }
        case CLEAN_FORM_DATA:
            return { ...state, expenseTitle: '', expenseAmount: '' }
        case EXPENSES_EMPTY_ENTRY:
            return { ...state, pageError: true, pageLoading: false }
        case FETCH_EXPENSES_FAILED:
            return { ...state, pageError: true, pageLoading: false }
        default:
            return state
    }

}