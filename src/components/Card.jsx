import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                {/* <p>{props.id}</p> */}
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img} altImg={props.altImg} />
            </div>

            <div className="bottom">
                <Detail detailInfo={props.follows} />
                <Detail detailInfo={props.twitchURL} />
            </div>
        </div>
    );
}

export default Card;
