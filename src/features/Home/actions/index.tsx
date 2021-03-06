import { request } from "../../../helpers/axios.intercepter";
import { IChangePassword, IUpdateProfil } from "../../../interfaces";
import { ERROR, LOADING, SIGN_IN, UPDATE_PROFIL } from "../../auth/constants";

export const updateProfil = async (dispatch: React.Dispatch<{ type: string, data: any }>, values: IUpdateProfil, currentUserId: number = 0) => {
    try {
        dispatch({
            type: LOADING,
            data: {
                loading: true
            }
        });
        debugger


        const { ok, status, statusText, result } = await request({
            url: '/utilisateur/update',
            method: 'PUT',
            body: JSON.stringify({ ...values, id: currentUserId }),
        });

        if (ok) {
            dispatch({
                type: UPDATE_PROFIL,
                data: {
                    isModified: true,
                    currentUser: result
                }
            });
        } else {
            dispatch({
                type: ERROR,
                data: {
                    error: {
                        code: status,
                        message: statusText
                    }
                }
            });
            dispatch({
                type: LOADING,
                data: {
                    loading: false
                }
            })
            return false;
        }
    } catch (error) {
        dispatch({
            type: ERROR,
            data: {
                error: {
                    code: error.errorCode,
                    message: error.message
                }
            }
        })
        dispatch({
            type: LOADING,
            data: {
                loading: false
            }
        })
        throw new Error(error)

    }

    dispatch({
        type: LOADING,
        data: {
            loading: false
        }
    })

    return true;
}

export const changePassword = async (dispatch: React.Dispatch<{ type: string, data: any }>, values: IChangePassword) => {
    try {
        dispatch({
            type: LOADING,
            data: {
                loading: true
            }
        });

        const { ok, status, statusText, result } = await request({
            url: '/utilisateur/updatePassword',
            method: 'PUT',
            body: JSON.stringify(values),
        });

        if (ok) {
            dispatch({
                type: SIGN_IN,
                data: {
                    isLoggedIn: true,
                    currentUser: values
                }
            });
        } else {
            dispatch({
                type: ERROR,
                data: {
                    error: {
                        code: status,
                        message: statusText
                    }
                }
            });
            dispatch({
                type: LOADING,
                data: {
                    loading: false
                }
            })
            return false;
        }
    } catch (error) {
        dispatch({
            type: ERROR,
            data: {
                error: {
                    code: error.errorCode,
                    message: error.message
                }
            }
        })
        dispatch({
            type: LOADING,
            data: {
                loading: false
            }
        })
        throw new Error(error)
    }

    dispatch({
        type: LOADING,
        data: {
            loading: false
        }
    })

    return true;
}