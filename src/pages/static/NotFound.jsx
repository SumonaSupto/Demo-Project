import React from 'react';
import error from "../../assets/images/error.jpg"
const NotFound = () => {
    return (
        <div>
            <img style={{width:"100%"}} src={error} alt="not found image" />
        </div>
    );
};

export default NotFound;