import axios from "axios";
import { FETCH_MOVIE_DETAIL_SUCCESS, FETCH_MOVIE_DETAIL_FAILED, CLEAN_DATA } from "../types";

export const getMovie = (imdbID) => {


    return async (dispatch, getState) => {
        try {
            const MovieResponse = await axios.get(`https://www.omdbapi.com/?apikey=b442f019&i=${imdbID}`);
            if (MovieResponse?.data?.Response) {
                dispatch({
                    type: FETCH_MOVIE_DETAIL_SUCCESS,
                    payload: MovieResponse?.data
                })
            }
            else {
                dispatch({
                    type: FETCH_MOVIE_DETAIL_FAILED
                })
            }
        }
        catch (error) {
            dispatch({
                type: FETCH_MOVIE_DETAIL_FAILED
            })
        }
    }
}

export const pressMovie = (imdbID) => {
    return (dispatch) => {
        dispatch({ type: CLEAN_DATA })
        dispatch(getMovie(imdbID))

    }

}