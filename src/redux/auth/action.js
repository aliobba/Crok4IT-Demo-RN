import { LOGIN, REGISTER, LOGOUT } from "./type";

export const LoginAction = (data) => ({ type: LOGIN, payload: data });

export const RegisterAction = (data) => ({ type: REGISTER });

export const LogoutAction = () => ({ type: LOGOUT });
