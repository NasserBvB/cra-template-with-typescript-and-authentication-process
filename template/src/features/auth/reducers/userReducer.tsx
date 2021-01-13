import { IAction, IUserState } from "../../../interfaces/index";
import { ERROR, LOADING, SIGN_IN, SIGN_OUT, UPDATE_PROFIL } from "../constants";

export function userReducer<T extends IUserState>(state: IUserState, action: IAction<T>) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLoggedIn: action.data.isLoggedIn,
                currentUser: action.data.currentUser
            }
        case SIGN_OUT:
            return {
                ...state,
                isLoggedIn: action.data.isLoggedIn,
                currentUser: action.data.currentUser
            }
        case UPDATE_PROFIL:
            return {
                ...state,
                isModified: action.data.isModified,
                currentUser: action.data.currentUser
            }
        case LOADING:
            return {
                ...state,
                loading: action.data.loading,
            }
        case ERROR:
            return {
                ...state,
                error: action.data.error,
            }


        default:
            return state;
    }
}