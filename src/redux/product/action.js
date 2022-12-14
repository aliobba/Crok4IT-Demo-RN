import { PRODUCT } from "./type";

export const ProductLimitedAction = (numItems) => ({ type: PRODUCT, payload: numItems });
