
export interface IUser {
    login: string;
    password: string;
}

export interface IError {
    code: number;
    message: string;
}

export interface IUserState {
    isLoggedIn: boolean;
    currentUser: IUser | null;
    loading: boolean;
    error: IError | null;
}

export interface IAction<T> {
    type: string;
    data: T;
}

export interface IForm extends IUser { }

export interface IRequestFetch {
    url: string;
    method: string;
    token?: string;
    body: string | null;
}

export interface ICustomBoxProps {
    children: any,
    maxHeight: number
}

export interface IChangePassword { oldPassword: string, newPassword: string, validatePassword: string }
export interface IForgottenPassword { email: string }
export interface ICurrentUserDetails { userID: string }