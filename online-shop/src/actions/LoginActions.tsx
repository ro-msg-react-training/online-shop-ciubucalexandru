import { LoginDTO, LoggedUser } from "../model/model";
import { LoginActions } from "../util/ActionTypes";

export class LoginRequestAction {
    readonly type = LoginActions.LOGIN_REQUEST;
    readonly loginDTO: LoginDTO;

    constructor(loginDTO: LoginDTO) {
        this.loginDTO = loginDTO;
    }
}

export class LoginSuccessAction {
    readonly type = LoginActions.LOGIN_SUCCESS;
    readonly loggedUser: LoggedUser;

    constructor(loggedUser: LoggedUser) {
        this.loggedUser = loggedUser;
    }
}

export class LoginFailAction {
    readonly type = LoginActions.LOGIN_FAIL;
    public errorType: string;

    constructor(errorType: string) {
        this.errorType = errorType;
    }
}

export class ChangeUsernameAction {
    readonly type = LoginActions.CHANGE_USERNAME;
    public username: string;

    constructor(username: string) {
        this.username = username;
    }
}

export class ChangePasswordAction {
    readonly type = LoginActions.CHANGE_PASSWORD;
    public password: string;

    constructor(password: string) {
        this.password = password;
    }
}

export class ClearLoginStatusLabelAction {
    readonly type = LoginActions.CLEAR_LOGIN_STATUS_LABEL;
}

export class LogoutAction {
    readonly type = LoginActions.LOGOUT;
}

export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailAction |
    ChangeUsernameAction | ChangePasswordAction | ClearLoginStatusLabelAction | LogoutAction;    

export const loginRequest = (loginDTO: LoginDTO): LoginRequestAction => {
    return {
        type: LoginActions.LOGIN_REQUEST,
        loginDTO: loginDTO,
    };
}

export const loginSuccess = (loggedUser: LoggedUser): LoginSuccessAction => {
    return {
        type: LoginActions.LOGIN_SUCCESS,
        loggedUser: loggedUser,
    };
}

export const loginFail = (errorType: string): LoginFailAction => {
    return {
        type: LoginActions.LOGIN_FAIL,
        errorType: errorType,
    };
}

export const changeUsername = (username: string): ChangeUsernameAction => {
    return {
        type: LoginActions.CHANGE_USERNAME,
        username: username,
    };
}

export const changePassword = (password: string): ChangePasswordAction => {
    return {
        type: LoginActions.CHANGE_PASSWORD,
        password: password,
    };
}

export const clearLoginStatusLabel = (): ClearLoginStatusLabelAction => {
    return {
        type: LoginActions.CLEAR_LOGIN_STATUS_LABEL,
    };
}

export const logout = (): LogoutAction => {
    return {
        type: LoginActions.LOGOUT,
    };
}
