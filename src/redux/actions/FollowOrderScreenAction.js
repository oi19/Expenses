import { SET_PAGE_NUM } from '../types';

export const setPageNum = (pageNum) => {
    return (dispatch) => {
        dispatch({type: SET_PAGE_NUM, payload: pageNum})
    }
}