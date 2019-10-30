import { LoginRequestAction, loginSuccess, loginFail } from "../actions/LoginActions";
import { API_LOGIN } from "../util/API";
import { MIN_SUCCESS_STATUS_CODE, MAX_SUCCESS_STATUS_CODE, STATUS_WRONG_CREDENTIALS, 
    STATUS_FAIL } from "../util/util";
import { put, takeEvery } from "@redux-saga/core/effects";
import { LoginActions } from "../util/ActionTypes";

function* loginRequest(action: LoginRequestAction) {

    try {
        const response = yield fetch(API_LOGIN, {
            body: JSON.stringify(action.loginDTO),
            method: "POST",
            headers: {'Content-Type':'application/json'},
        });

        if (response.status >= MIN_SUCCESS_STATUS_CODE && response.status < MAX_SUCCESS_STATUS_CODE) {
            const data = yield response.json();
            yield put(loginSuccess(data));
        } else {
            yield put(loginFail(STATUS_WRONG_CREDENTIALS));
        }
    } catch (error) {
        yield put(loginFail(STATUS_FAIL));
    }
}

export function* loginRequestWatcher() {
    yield takeEvery(LoginActions.LOGIN_REQUEST, loginRequest);
}
