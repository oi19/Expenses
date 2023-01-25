import axios from "axios";
import { ADD_ADDRESS, } from "../types";
import strings from "../../localization";


export const addAddress = (address) => {
    return (dispatch) => {
        dispatch({
            type: ADD_ADDRESS,
            address
        })
    }


}