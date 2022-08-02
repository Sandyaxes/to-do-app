import React from "react";
import pic from "./cat.svg";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="content-box">
                <h2 className="tt">Oops Someone made a mess of things</h2>
                <img src={pic} alt=""/>
                <p>We will try clean it up as soon as possible</p>
            </div>
        </div>
    );
}

export default NotFound;