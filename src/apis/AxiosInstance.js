import React from 'react';
import { NativeModules } from 'react-native'

import axios from 'axios'
import { DEV_API_URL, PROD_API_URL } from "@env"
import { store } from '../redux/store';

const env = NativeModules.RNConfig.env;


const axiosInstance = axios.create({
    baseURL: env === 'dev' ? DEV_API_URL : PROD_API_URL,
});

axiosInstance.interceptors.request.use(
    config => {
        const state = store.getState();
        const token = state.authReducer.token;

        if (token && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

export default axiosInstance;