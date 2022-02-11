import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
    return (
        <Card
            key={contact.id} //cannot use key as a property
            id={contact.id} //create new property if you want to render "Key"
            name={contact.name}
            img={contact.imgURL}
            altImg={contact.altImg}
            follows={contact.follows}
            twitchURL={contact.twitchURL}
        />
    );
}

function App() {
    return (
        <div>
            <h1 className="heading">Twitch Streamer Cards</h1>

            {contacts.map(createCard)}
        </div>
    );
}

export default App;
