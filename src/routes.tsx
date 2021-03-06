import React from "react";
import { Redirect, Route } from "react-router-dom";
import { ForgottenPassword } from "./features/auth/modules/ForgottenPassword";
import Login from "./features/auth/modules/SignIn";
import { useUserState } from "./features/auth/providers";
import Home from "./features/Home";
import Profil from "./features/Home/Profil";
import ChangePassword from "./features/Home/Profil/ChangePassword";
import DashboardLayout from "./layout/dashboard";
import MainLayout from "./layout/main";

export const Routes = () => {
    const { isLoggedIn } = useUserState();
    const content = (
        <>
            <Route path="/">
                <Redirect to={isLoggedIn ? "/home" : "/login"} />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/profil">
                <Profil />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/forgotten-password">
                <ForgottenPassword />
            </Route>
            <Route path="/change-password">
                <ChangePassword />
            </Route>
        </>
    )
    return (
        isLoggedIn ?
            <DashboardLayout>
                {content}
            </DashboardLayout>
            : <MainLayout>
                {content}
            </MainLayout>
    )
}
