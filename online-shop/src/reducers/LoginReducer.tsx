import { LoggedUser } from '../model/model';
import { LoginAction } from '../actions/LoginActions';
import { STATUS_NONE, STATUS_SUCCESS, NO_USER } from '../util/util';
import { LoginActions } from '../util/ActionTypes';

export interface LoginState {
    hasError: string;
    loggedUser: LoggedUser;
    passwordField: string;
    usernameField: string;  
}

const initialState: LoginState = {
    hasError: STATUS_NONE,
    loggedUser: NO_USER,
    passwordField: "",
    usernameField: "",
};

export const LoginReducer = (
    state: LoginState = initialState,
    action: LoginAction,
): LoginState => {

    switch(action.type) {
        case LoginActions.LOGIN_REQUEST: {
            return state;
        }
        case LoginActions.LOGIN_SUCCESS: {
            return {
                hasError: STATUS_SUCCESS,
                loggedUser: action.loggedUser,
                passwordField: state.passwordField,
                usernameField: state.usernameField,
            };
        }
        case LoginActions.LOGIN_FAIL: {
            return {
                hasError: action.errorType,
                loggedUser: NO_USER,
                passwordField: state.passwordField,
                usernameField: state.usernameField,
            };
        }
        case LoginActions.CHANGE_PASSWORD: {
            return {
                hasError: STATUS_NONE,
                loggedUser: state.loggedUser,
                passwordField: action.password,
                usernameField: state.usernameField,
            };
        }
        case LoginActions.CHANGE_USERNAME: {
            return {
                hasError: STATUS_NONE,
                loggedUser: state.loggedUser,
                passwordField: state.passwordField,
                usernameField: action.username,
            };
        }
        case LoginActions.CLEAR_LOGIN_STATUS_LABEL: {
            return {
                hasError: STATUS_NONE,
                loggedUser: state.loggedUser,
                passwordField: state.passwordField,
                usernameField: state.usernameField,
            };
        }
        case LoginActions.LOGOUT: {
            return {
                hasError: STATUS_NONE,
                loggedUser: NO_USER,
                passwordField: state.usernameField,
                usernameField: state.passwordField,
            }
        }
        default: {
            return state;
        }
    }
}
