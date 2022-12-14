import { put, call, delay, takeEvery } from "redux-saga/effects";
import axiosInstance from "../../apis/AxiosInstance";
import { loginApi, registerApi } from "../../apis/services/auth.apis";
import {
	LOGIN,
	SUCCESS_LOGIN,
	ERROR_LOGIN,
	REGISTER,
	SUCCESS_REGISTER,
	ERROR_REGISTER,
	LOGOUT,
	SUCCESS_LOGOUT
} from "./type";

export default function* authServicesSaga() {
	yield takeEvery(LOGIN, login);
	yield takeEvery(LOGOUT, logout);
	yield takeEvery(REGISTER, register);
}

function* login(action) {
	try {
		const response = yield call(loginApi, action.payload);
		yield put({ type: SUCCESS_LOGIN, res: response });
	} catch (_err) {
		yield put({ type: ERROR_LOGIN, err: _err });
	}
}

function* register(action) {
	try {
		const response = yield call(registerApi, action.payload);
		yield put({ type: SUCCESS_REGISTER, res: response });
	} catch (_err) {
		yield put({ type: ERROR_REGISTER, err: _err });
	}
}

function* logout() {
	try {
		yield delay(3000);
		yield put({ type: SUCCESS_LOGOUT });
	} catch {
		yield put({ type: SUCCESS_LOGOUT });
	}
}
