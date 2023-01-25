import { SET_PAGE_NUM } from '../types';

export const autoLogin = (username,id) => {
    return (dispatch) => {
        dispatch({ type: SET_PAGE_NUM, payload: pageNum })
    }
}