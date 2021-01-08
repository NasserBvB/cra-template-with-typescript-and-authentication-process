
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