import { CHANGE_SEARCH_DATA } from '../types';

export const updateSearchData = (title, kind,searchTerm) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SEARCH_DATA,
            title: title,
            kind: kind,
            // searchTerm:searchTerm
        })
    }

}
