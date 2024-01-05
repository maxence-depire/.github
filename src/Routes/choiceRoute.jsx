import React from "react";
import { Routes, Route } from "react-router-dom";

import allRoutes from "./routesList"

const RouteChoice = (props) => {
    return (
        <Routes>
            {
                allRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={route.component()}
                    />
                ))
            }
        </Routes>
    )
}

export default RouteChoice;