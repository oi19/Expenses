import axios from "axios";
import { FETCH_MOVIE_DETAIL_SUCCESS, FETCH_MOVIE_DETAIL_FAILED, CLEAN_DATA, ADD_CATEGORY, DEL_CATEGORY, FETCH_CATEGORIES, FETCH_PRODUCT_LIST, CHANGE_PRODUCT_STATUS, FETCH_FAV_LIST, ADD_TO_CART, CLEAR_CART, CHANGE_PRODUCT_RATE } from "../types";
import strings from "../../localization";


const productList = [
    { id: 1, name: strings.watermelon, like: true, price: '60 eg', type: 'fruits', source: require('../../assets/photos/watermelon.png') },
    { id: 2, name: strings.strawberry, like: false, price: '80 eg', type: 'fruits', source: require('../../assets/photos/strawberry.png') },
    { id: 3, name: strings.papaya, like: false, price: '120 eg', type: 'fruits', source: require('../../assets/photos/blackGrapes.png') },
    { id: 4, name: strings.blackGrape, like: false, price: '60 eg', type: 'fruits', source: require('../../assets/photos/papaya.png') },
    { id: 5, name: strings.tomatos, like: false, price: '60 eg', type: 'vegetables', source: require('../../assets/photos/papaya.png') },
    { id: 6, name: strings.cucamber, like: false, price: '60 eg', type: 'vegetables', source: require('../../assets/photos/papaya.png') },
    { id: 7, name: strings.garlic, like: false, price: '60 eg', type: 'vegetables', source: require('../../assets/photos/papaya.png') },
    { id: 8, name: strings.broccoli, like: false, price: '60 eg', type: 'vegetables', source: require('../../assets/photos/papaya.png') },
    { id: 9, name: strings.bacon, like: false, price: '60 eg', type: 'meat', source: require('../../assets/photos/papaya.png') },
    { id: 10, name: strings.beef, like: false, price: '60 eg', type: 'meat', source: require('../../assets/photos/papaya.png') },
    { id: 11, name: strings.salami, like: false, price: '60 eg', type: 'meat', source: require('../../assets/photos/papaya.png') },
    { id: 12, name: strings.ham, like: false, price: '60 eg', type: 'meat', source: require('../../assets/photos/papaya.png') },
    { id: 13, name: strings.cookies, like: false, price: '60 eg', type: 'bakes', source: require('../../assets/photos/papaya.png') },
    { id: 14, name: strings.doughnut, like: false, price: '60 eg', type: 'bakes', source: require('../../assets/photos/papaya.png') },
    { id: 15, name: strings.baguette, like: false, price: '60 eg', type: 'bakes', source: require('../../assets/photos/papaya.png') },
    { id: 16, name: strings.whiteBread, like: false, price: '60 eg', type: 'bakes', source: require('../../assets/photos/papaya.png') },
    { id: 17, name: strings.salamon, like: false, price: '60 eg', type: 'fish', source: require('../../assets/photos/papaya.png') },
    { id: 18, name: strings.tuna, like: false, price: '60 eg', type: 'fish', source: require('../../assets/photos/papaya.png') },
    { id: 19, name: strings.caviar, like: false, price: '60 eg', type: 'fish', source: require('../../assets/photos/papaya.png') },
    { id: 20, name: strings.crab, like: true, price: '60 eg', type: 'fish', source: require('../../assets/photos/papaya.png') },
]



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

export const addCategory = ({ name, source }) => {
    return (dispatch) => {
        dispatch({
            type: ADD_CATEGORY,
            payload: { name, source }
        })
    }
}

export const delCategory = ({ name }) => {
    return (dispatch) => {
        dispatch({
            type: DEL_CATEGORY,
            payload: { name }
        })
    }
}
export const getCategoriesList = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_CATEGORIES,
            // categories: categories

        })
    }
}

export const getProducts = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_PRODUCT_LIST,
        })


    }
}


export const changeProductStatus = (item) => {
    item.like = !item.like
    const product = item

    return (dispatch) => {

        dispatch({
            type: CHANGE_PRODUCT_STATUS,
            product: item,
            like: product.like
        })
    }
}



export const clearCart = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART
        })
    }
}

export const addToCart = (item) => {
    // const product = productList.find((item) => { return item.id === id })
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            product: item
        })
    }
}
export const changeProductRate = (item, rate) => {
    item.rate = rate
    product = item
    return (dispatch) => {
        dispatch({
            type: CHANGE_PRODUCT_RATE,
            product: product
        })
    }
}
