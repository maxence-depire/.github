import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const HomeScreen = (props) => {

    const navigate = useNavigate();

    return <Fragment>
        <h3>Wow</h3>
        <button onClick={() => {navigate("/menu")}}>non</button>
    </Fragment>
}

export default HomeScreen