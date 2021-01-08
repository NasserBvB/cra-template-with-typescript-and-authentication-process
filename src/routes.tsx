import React from "react";
import { Redirect, Route } from "react-router-dom";
import Login from "./features/auth/modules/SignIn";
import { useUserState } from "./features/auth/providers";
import Home from "./features/Home";
import DashboardLayout from "./layout/dashboard";
import MainLayout from "./layout/main";

export const Routes = () => {
    return <Authenticated />
}

const Authenticated = () => {
    const { isLoggedIn } = useUserState();

    return (
        isLoggedIn ?
            <DashboardLayout>
                <Route path="/">
                    <Redirect to={isLoggedIn ? "/home" : "/login"} />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </DashboardLayout>
            : <MainLayout>
                <Route path="/">
                    <Redirect to={isLoggedIn ? "/home" : "/login"} />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </MainLayout>
    )
}
