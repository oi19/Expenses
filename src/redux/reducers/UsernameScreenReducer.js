import strings from "../../localization";
import { ADD_ADDRESS } from "../types";

const initialState = {
    id: 0,
    username: '',
    email: '',
    phone: '',
    city: '',
    gender: '',
    birthdate: '',
    addresses: [{ id: 1, address: 'Mustafa Kamel St Block 39, 9th floor, apartment 97' },
    { id: 2, address: 'Mustafa Kamel St Block 39, 9th floor, apartment 97' },
    { id: 3, address: 'Mustafa Kamel St Block 39, 9th floor, apartment 97' },
    { id: 4, address: 'Mustafa Kamel St Block 39, 9th floor, apartment 97' },
    { id: 5, address: 'Mustafa Kamel St Block 39, 9th floor, apartment 97' },
    { id: 6, address: 'Mustafa Kamel St Block 39, 9th floor, apartment 97' }]

}


const UsernameScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return { ...state, addresses: addresses.append(action.address) }
        default:
            return state
    }

}

export default UsernameScreenReducer