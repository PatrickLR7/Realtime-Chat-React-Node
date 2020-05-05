import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import { capitalize } from "../../utils/fieldParser";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h1>
                Realtime Chat Application{" "}
                <span role="img" aria-label="emoji">
                    💬
                </span>
            </h1>
            <h2>
                Created with React, Express, Node and Socket.IO{" "}
                <span role="img" aria-label="emoji">
                    ❤️
                </span>
            </h2>
            <h2>
                Try it out right now!{" "}
                <span role="img" aria-label="emoji">
                    ⬅️
                </span>
            </h2>
            <br />
            <h3>
                The code for this version of the app was written by:{" "}
                <a className="link" href="https://github.com/PatrickLR7/">
                    PatrickLR7
                </a>
            </h3>
            <h3>
                It was made by following Javascript Mastery's Tutorial, check
                him out on{" "}
                <a
                    className="link"
                    href="https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A"
                >
                    Youtube
                </a>
            </h3>
        </div>
        {users ? (
            <div>
                <h1>People currently chatting:</h1>
                <div className="activeContainer">
                    <h2>
                        {users.map(({ name }) => (
                            <div key={name} className="activeItem">
                                {capitalize(name)}
                                <img alt="Online Icon" src={onlineIcon} />
                            </div>
                        ))}
                    </h2>
                </div>
            </div>
        ) : null}
    </div>
);

export default TextContainer;
