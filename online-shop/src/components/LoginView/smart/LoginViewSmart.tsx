import React from 'react';
import LoginViewDumb from '../dumb/LoginViewDumb';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../store/store';
import { Dispatch } from 'redux';
import { loginRequest, changeUsername, changePassword } from '../../../actions/LoginActions';
import { STATUS_WRONG_CREDENTIALS, STATUS_FAIL, STATUS_SUCCESS } from '../../../util/util';
import { Redirect } from 'react-router';

interface ILoginViewSmartProps {
    hasError: string;
    passwordField: string;
    usernameField: string;
}

const LoginViewSmart: React.FC = () => {

    const loginState: ILoginViewSmartProps = useSelector((state: AppState) => state.login);
    const dispatch: Dispatch = useDispatch();
    let formStatus: string;

    if (loginState.hasError === STATUS_WRONG_CREDENTIALS) {
        formStatus = WRONG_CREDENTIALS;
    } else if (loginState.hasError === STATUS_FAIL) {
        formStatus = FAILED_REQUEST;
    } else if (loginState.hasError === STATUS_SUCCESS) {
        return (
            <Redirect to="/home" />
        );
    } else {
        formStatus = generateFormStatus(loginState.usernameField, loginState.passwordField).message;
    }

    return (
        <LoginViewDumb 
            formStatus={formStatus}
            onUsernameChange={(e) => changeUsernameCallback(dispatch, e)}
            onPasswordChange={(e) => changePasswordCallback(dispatch, e)}
            onSubmit={() => loginRequestCallback(dispatch, loginState.usernameField, loginState.passwordField)}
        />
    );
}

const loginRequestCallback = (dispatch: Dispatch, username: string, password: string) => {
    if (generateFormStatus(username, password).status === true) {
        dispatch(loginRequest({
            username: username,
            password: password,
        }));
    }
}

const changeUsernameCallback = (dispatch: Dispatch, username: string) => {
    dispatch(changeUsername(username));
}

const changePasswordCallback = (dispatch: Dispatch, password: string) => {
    dispatch(changePassword(password));
}

const generateFormStatus = (username: string, password: string): { message: string, status: boolean } => {
    if (username.length < 3 || password.length < 3) {
        return { message: FIELDS_LONGER_THAN_3, status: false };
    } else if (username.includes(" ") || password.includes(" ")) {
        return { message: FIELDS_CONTAIN_SPACES, status: false };
    } else {
        return { message: "", status: true };
    }
}

const FIELDS_LONGER_THAN_3 = "The username/password should be at least 3 characters long!";
const FIELDS_CONTAIN_SPACES = "The username/password should not contain spaces!";
const WRONG_CREDENTIALS = "Wrong username or password!";
const FAILED_REQUEST = "Could not complete login!";

export default LoginViewSmart;
