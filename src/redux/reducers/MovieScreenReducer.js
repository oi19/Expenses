import { Fetch_Movie_DETAIL_FAILED, FETCH_MOVIE_DETAIL_SUCCESS, CLEAN_DATA } from "../types";


const initialState =
{
    moviEData: {},
    pageLoading: true
}


const MovieScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_DETAIL_SUCCESS:
            return { movieData: action.payload, pageLoading: false }
        case Fetch_Movie_DETAIL_FAILED:
            return { movieData: {}, pageLoader: true }
        case CLEAN_DATA:
            return { movieData: {}, pageLoading: true }
        default:
            return state;
    }
}


export default MovieScreenReducer;