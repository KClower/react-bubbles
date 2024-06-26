import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";


const PrivateRoute = ({ component: Component, ...rest }) => {

    const token = window.localStorage.getItem('token');
    return (
        <Route {...rest} render={() => {
            if (token) {
                return <Component />
            } else {
                return <Redirect to="/" />
            }
        }} />
    )
}

export default PrivateRoute