import strings from '../../localization';
import { CHANGE_SEARCH_DATA } from '../types';

const initialState = {
    sectionType: '',
    sectionTitle: '',
    // searchTerm: ''
}


const SearchScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_DATA:
            return { sectionTitle: action.title, sectionType: action.kind }

        default:
            return state;
    }
}

export default SearchScreenReducer;