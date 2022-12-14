import {
    LOGIN,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    REGISTER,
    SUCCESS_REGISTER,
    ERROR_REGISTER,
    LOGOUT,
    SUCCESS_LOGOUT
} from './type';

const initialState = {
    loading: false,
    token: null,
    users: []
}

export default function authReducer(state = initialState, action) {

    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                loading: true
            }

        case SUCCESS_LOGIN:
            return {
                ...state,
                loading: false,
                token: action.res.data.token
            }

        case ERROR_LOGIN:
            return {
                ...state,
                loading: false,
                token: null
            }

        case REGISTER:
            return {
                ...state,
                loading: true
            }

        case SUCCESS_REGISTER:
            return {
                ...state,
                loading: false,
            }

        case ERROR_REGISTER:
            return {
                ...state,
                loading: false,
            }

        case LOGOUT:
            return {
                ...state,
                loading: true,
            }

        case SUCCESS_LOGOUT:
            return {
                ...state,
                loading: false,
                token: null
            }

        default:
            return state
    }
}