
export interface ICredentials {
    login: string;
    password: string;
}

export interface IError {
    code: number;
    message: string;
}

export interface IPrevilege {
    id: number;
    name: string;
}

export interface IProfil {
    id: number;
    name: string;
    previleges: Array<IPrevilege>;
}

export interface IUser {
    id: number;
    utilisateurId: string;
    nom: string;
    prenom: string;
    login: string;
    email: string;
    password: string;
    profil: IProfil;
    datecreation: string;
    tel: string;
    encryptedPassword: string;
    emailverificationStatus: boolean;
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

export interface IForm extends ICredentials { }

export interface IRequestFetch {
    url: string;
    method: string;
    token?: string;
    body: any;
}

export interface ICustomBoxProps {
    children: any,
    maxHeight: number
}

export interface IChangePassword {
    oldPassword: string,
    newPassword: string,
    validatePassword: string
}

export interface IForgottenPassword {
    email: string
}

export interface ICurrentUserDetails {
    userID: string
}

export interface ISignIn {
    handleChange: any,
    label: string,
    field: string,
    value: any,
    type: string,
    className?: string,
    modifying?: boolean 
}