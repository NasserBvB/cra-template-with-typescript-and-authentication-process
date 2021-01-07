import { createContext, useContext, useReducer } from "react";
import { IUserState } from "../../../interfaces";
import { userReducer } from "../reducers/userReducer";

const initialState: IUserState = {
    loading: false,
    currentUser: null,
    isLoggedIn: false,
}

let dispatchInitial: any;
const UserContext = createContext(initialState);
const DispatchUserContext = createContext<{ dispatch: React.Dispatch<{ type: string, data: any }> }>(dispatchInitial);

const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(userReducer, initialState);

    return (
        <DispatchUserContext.Provider value={{ dispatch }}>
            <UserContext.Provider value={userState}>
                {children}
            </UserContext.Provider>
        </DispatchUserContext.Provider >
    )
}

// export const useUserStore = () => {
export const useUserState = () => useContext(UserContext);
export const useDispatchUser = () => useContext(DispatchUserContext);

//     return {
//         state,
//         dispatch
//     }
// }

export default UserProvider;