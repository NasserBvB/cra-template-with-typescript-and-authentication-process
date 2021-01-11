import { request } from "../../../helpers/axios.intercepter";
import { IChangePassword, ICredentials, ICurrentUserDetails, IForgottenPassword } from "../../../interfaces";
import { ERROR, LOADING, SIGN_IN, SIGN_OUT } from "../constants";

export const signIn = async (dispatch: React.Dispatch<{ type: string, data: any }>, values: ICredentials) => {
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
            // dispatch({
            //     type: SIGN_IN,
            //     data: {
            //         isLoggedIn: true,
            //         currentUser: values
            //     }
            // });
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
            url: '/utilisateur/update',
            method: 'PUT',
            body: JSON.stringify(values),
        });

        if (ok) {
            dispatch({
                type: SIGN_IN,
                data: {
                    isLoggedIn: true,
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
            body: values
        });
        debugger
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

export const logout = async (dispatch: React.Dispatch<{ type: string, data: any }>) => {
    try {
        dispatch({
            type: SIGN_OUT,
            data: {
                isLoggedIn: false,
                currentUser: null
            }
        });

        localStorage.removeItem('token');


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