import { request } from "../../../helpers/axios.intercepter";
import { IChangePassword, ICurrentUserDetails, IForgottenPassword, IUser } from "../../../interfaces";
import { ERROR, LOADING, SIGN_IN } from "../constants";

export const signIn = async (dispatch: React.Dispatch<{ type: string, data: any }>, values: IUser) => {
    try {
        dispatch({
            type: LOADING,
            data: {
                loading: true
            }
        });

        const { ok, status, statusText, result } = await request({
            url: '/utilisateur/login',
            method: 'POST',
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

        return false;
    }

    dispatch({
        type: LOADING,
        data: {
            loading: false
        }
    })

    return true;
}

export const getCurrentUserDetails = async (dispatch: React.Dispatch<{ type: string, data: any }>, values: ICurrentUserDetails) => {
    try {
        dispatch({
            type: LOADING,
            data: {
                loading: true
            }
        });

        const { ok, status, statusText, result } = await request({
            url: '/utilisateur/login',
            method: 'POST',
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

        return false;
    }

    dispatch({
        type: LOADING,
        data: {
            loading: false
        }
    })

    return true;
}

export const forgottenPassword = async (dispatch: React.Dispatch<{ type: string, data: any }>, values: IForgottenPassword) => {
    try {
        dispatch({
            type: LOADING,
            data: {
                loading: true
            }
        });

        const { ok, status, statusText, result } = await request({
            url: '/utilisateur/login',
            method: 'POST',
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

        return false;
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
            url: '/utilisateur/login',
            method: 'POST',
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

        return false;
    }

    dispatch({
        type: LOADING,
        data: {
            loading: false
        }
    })

    return true;
}