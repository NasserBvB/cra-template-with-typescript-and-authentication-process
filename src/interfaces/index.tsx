
export interface IUser {
    login: string;
    password: string;
}

export interface IUserState {
    isLoggedIn: boolean;
    currentUser: IUser | null;
    loading: boolean;
}

export interface IAction<T> {
    type: string;
    data: T;
}

export interface IForm extends IUser { }