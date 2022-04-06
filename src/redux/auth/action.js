import axios from 'axios';

import { url, auth, login, users } from '../../values/Api'

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



export const LoginAction = (data) => {
    return (dispatch) => {
        dispatch({ type: LOGIN });
        console.log(data);
        axios.post(url + auth + login, data)
            .then((res) => {
                console.log({ res });
                dispatch({
                    type: SUCCESS_LOGIN,
                    res: res.data
                });
            })
            .catch((err) => {
                console.log({ err });
                dispatch({
                    type: ERROR_LOGIN,
                    err
                });
            })
    }
}

export const RegisterAction = (data) => {
    return (dispatch) => {
        dispatch({ type: REGISTER });

        axios.post(url + users, data)
            .then((res) => {
                dispatch({
                    type: SUCCESS_REGISTER,
                    res
                });
            })
            .catch((err) => {

                dispatch({
                    type: ERROR_REGISTER,
                    err
                });
            })
    }
}

export const LogoutAction = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT });

        setTimeout(() => {
            dispatch({ type: SUCCESS_LOGOUT });
        }, 3000);
    }
}