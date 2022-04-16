import axios from 'axios';

import { url, products } from '../../values/Api'

import {
    PRODUCT,
    SUCCESS_PRODUCT,
    ERROR_PRODUCT
} from './type';




export const ProductLimitedAction = (numItems, token) => {
    console.log('hereeeeeeeeeeeeeeeeeeeeeee !!!');
    return (dispatch) => {
        dispatch({ type: PRODUCT });

        axios.get(url + products + '?limit=' + numItems, null, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: SUCCESS_PRODUCT,
                    res: res.data
                });
            })
            .catch((err) => {
                console.log("error !!!!!!!!!!!!!!!!!!!!");
                dispatch({
                    type: ERROR_PRODUCT,
                    err
                });
            })
    }
}