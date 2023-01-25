import strings from '../../src/localization';
import { CHANGE_SEARCH_DATA } from '../types';

const initialState = {
    id: 1,
    username: '',
    phone: '',
    email: '',
    city: '',
    
    
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