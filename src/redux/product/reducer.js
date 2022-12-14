import {
    PRODUCT,
    SUCCESS_PRODUCT,
    ERROR_PRODUCT
} from './type';

const initialState = {
    loading: false,
    products: null
}

export default function productReducer(state = initialState, action) {

    switch (action.type) {

        case PRODUCT:
            return {
                ...state,
                loading: true
            }

        case SUCCESS_PRODUCT:
            return {
                ...state,
                loading: false,
                products: action.res.data
            }

        case ERROR_PRODUCT:
            return {
                ...state,
                loading: false,
                products: []
            }

        default:
            return state
    }
}