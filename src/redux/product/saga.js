import { put, call, takeEvery } from "redux-saga/effects";
import axiosInstance from "../../apis/AxiosInstance";
import { ProductLimitedApi } from "../../apis/services/product.apis";
import { PRODUCT, SUCCESS_PRODUCT, ERROR_PRODUCT } from "./type";

export default function* productServicesSaga() {
	yield takeEvery(PRODUCT, ProductLimited);
}

function* ProductLimited(action) {
	try {
		const response = yield call(ProductLimitedApi, action.payload);
		yield put({ type: SUCCESS_PRODUCT, res: response });
	} catch (_err) {
		yield put({ type: ERROR_PRODUCT, err: _err });
	}
}


