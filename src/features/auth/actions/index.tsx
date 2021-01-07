import { IUser } from "../../../interfaces";
import { LOADING, SIGN_IN } from "../constants";

export const signIn = async (dispatch: React.Dispatch<{ type: string, data: any }>, values: IUser) => {
    dispatch({ type: LOADING, data: { loading: true } })

    const data = await fetch('/utilisateur/login', {
        method: 'POST',
        body: JSON.stringify(values)
    });
    const response = await data.json();

    dispatch({ type: SIGN_IN, data: { isLoggedIn: true, currentUser: values } });
    dispatch({ type: LOADING, data: { loading: false } })

    return true;
}