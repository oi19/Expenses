import { SET_PAGE_NUM } from "../types";

const initialState = {
    pageNum: 1
}

const FollowOrderScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_NUM:
            return { pageNum: action.payload }
       
        default:
            return state;
    }
}


export default FollowOrderScreenReducer;