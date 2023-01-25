import { ADD_CATEGORY, DEL_CATEGORY, FETCH_CATEGORIES, FETCH_PRODUCT_LIST, SET_PAGE_NUM, FETCH_FAV_LIST, CHANGE_PRODUCT_STATUS, ADD_TO_CART, CLEAR_CART, CHANGE_PRODUCT_RATE } from "../types";
import strings from "../../localization";

const initialState = {
    categories: [
        { id: 1, name: strings.fruits, source: require('../../assets/photos/Group135.png') },
        { id: 2, name: strings.vegetables, source: require('../../assets/photos/Group140.png') },
        { id: 3, name: strings.meat, source: require('../../assets/photos/Group137.png') },
        { id: 4, name: strings.bakes, source: require('../../assets/photos/Group138.png') },
        { id: 5, name: strings.fish, source: require('../../assets/photos/dolly-fish.png') }],
    productList: [
        { id: 1, name: strings.watermelon, like: true, price: 60, rate: 4, type: strings.fruits, bestSelling: true, sale: false, source: require('../../assets/photos/watermelon.png') },
        { id: 2, name: strings.strawberry, like: false, price: 80, rate: 0, type: strings.fruits, bestSelling: false, sale: false, source: require('../../assets/photos/strawberry.png') },
        { id: 3, name: strings.papaya, like: false, price: 120, rate: 0, type: strings.fruits, bestSelling: false, sale: false, source: require('../../assets/photos/blackGrapes.png') },
        { id: 4, name: strings.blackGrape, like: false, price: 60, rate: 0, type: strings.fruits, bestSelling: true, sale: true, source: require('../../assets/photos/papaya.png') },
        { id: 5, name: strings.tomatos, like: false, price: 60, rate: 0, type: strings.vegetables, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 6, name: strings.cucamber, like: false, price: 60, rate: 0, type: strings.vegetables, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 7, name: strings.garlic, like: false, price: 60, rate: 0, type: strings.vegetables, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 8, name: strings.broccoli, like: false, price: 60, rate: 0, type: strings.vegetables, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 9, name: strings.bacon, like: false, price: 60, rate: 0, type: strings.meat, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 10, name: strings.beef, like: false, price: 60, rate: 0, type: strings.meat, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 11, name: strings.salami, like: false, price: 60, rate: 0, type: strings.meat, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 12, name: strings.ham, like: false, price: 60, rate: 0, type: strings.meat, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 13, name: strings.cookies, like: false, price: 60, rate: 0, type: strings.bakes, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 14, name: strings.doughnut, like: false, price: 60, rate: 0, type: strings.bakes, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 15, name: strings.baguette, like: false, price: 60, rate: 0, type: strings.bakes, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 16, name: strings.whiteBread, like: false, price: 60, rate: 0, type: strings.bakes, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 17, name: strings.salamon, like: false, price: 60, rate: 0, type: strings.fish, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 18, name: strings.tuna, like: false, price: 60, rate: 0, type: strings.fish, bestSelling: true, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 19, name: strings.caviar, like: false, price: 60, rate: 0, type: strings.fish, bestSelling: false, sale: true, source: require('../../assets/photos/papaya.png') },
        { id: 20, name: strings.crab, like: true, price: 60, rate: 0, type: strings.fruits, bestSelling: true, sale: true, source: require('../../assets/photos/papaya.png') },
        { id: 21, name: strings.crab, like: true, price: 60, rate: 0, type: strings.fish, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 22, name: strings.crab, like: true, price: 60, rate: 0, type: strings.bakes, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 23, name: strings.crab, like: true, price: 60, rate: 0, type: strings.meat, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 24, name: strings.crab, like: true, price: 60, rate: 0, type: strings.vegetables, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
        { id: 25, name: strings.crab, like: true, price: 60, rate: 0, type: strings.fish, bestSelling: false, sale: false, source: require('../../assets/photos/papaya.png') },
    ],
    cartList: []

}


const HomeScreenrReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRODUCT_STATUS:
            return {
                ...state, productList: state.productList.map((item) => { return item.id === action.product.id ? action.product : item })
            }
        case CHANGE_PRODUCT_RATE:
            return {
                ...state, productList: state.productList.map((item) => { return item.id === action.product.id ? action.product : item })
            }
        case ADD_TO_CART:
            return { ...state, cartList: [...state.cartList, action.product] }
        case CLEAR_CART:
            return { ...state, cartList: [] }
        default:
            return state;
    }
}


export default HomeScreenrReducer;