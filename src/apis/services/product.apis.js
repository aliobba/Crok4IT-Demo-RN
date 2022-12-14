import axiosInstance from "../AxiosInstance";

export const ProductLimitedApi = (numItems) => axiosInstance.get("/products?limit=" + numItems);