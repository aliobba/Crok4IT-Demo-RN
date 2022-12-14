import axiosInstance from "../AxiosInstance";

export const loginApi = (payload) => axiosInstance.post('/auth/login', payload);

export const registerApi = (payload) => axiosInstance.post('/users', payload);