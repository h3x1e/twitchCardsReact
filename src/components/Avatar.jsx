import React from "react";

function Avatar(props) {
    return <img className="circle-img" src={props.img} alt={props.altImg} />;
}

export default Avatar;
