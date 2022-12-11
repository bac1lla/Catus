import React from 'react';
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../routes/consts";

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>
                Not Found
            </h1>
            <button onClick={() => navigate(LOGIN_ROUTE)}><h2>On login page -{'>'}</h2></button>
        </div>
    );
};

export default NotFound;