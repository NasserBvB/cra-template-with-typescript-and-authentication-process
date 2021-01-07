import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./features/auth/modules/SignIn";
import { useUserState } from "./features/auth/providers";
import Home from "./features/Home";

export const Routes = () => {
    const { isLoggedIn } = useUserState()

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => { return <>{isLoggedIn && <Home />}</> }} />
                <Route exact path="/login" component={() => <Login />} />
                <Route path="/*" component={() => <Redirect to="/" />} />
            </Switch>
        </Router>
    )
}