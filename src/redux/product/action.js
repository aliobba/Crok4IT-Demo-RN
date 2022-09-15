import axiosInstance from '../../apis/AxiosInstance';

import {
    PRODUCT,
    SUCCESS_PRODUCT,
    ERROR_PRODUCT
} from './type';


export const ProductLimitedAction = (numItems) => {
    
    return (dispatch) => {
        dispatch({ type: PRODUCT });

        axiosInstance.get('/products?limit=' + numItems, null)
            .then((res) => {
                
                dispatch({
                    type: SUCCESS_PRODUCT,
                    res: res.data
                });
            })
            .catch((err) => {
                
                dispatch({
                    type: ERROR_PRODUCT,
                    err
                });
            })
    }
}