import React from "react";
import { Link } from "react-router-dom";
import pic from "./cat.svg";
// function App(){
//  return <img src={pic} />
// }
const NotFound = () => {
    return (
        <div className="not-found">
            <div className="content-box">
                <h2 className="tt">Oops Someone made a mess of things</h2>
                <img src={pic} />
                <p>We will try clean it up as soon as possible</p>
            </div>
        </div>
    );
}

export default NotFound;