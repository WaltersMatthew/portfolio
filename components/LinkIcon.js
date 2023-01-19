import React from "react";

function LinkIcon(props) {
    return (
        <a target="_blank" href={props.href}>
            <img
                src={props.src}
                alt={props.alt}
                className="h-20 m-4 hover:scale-125 transition duration-300 ease-in-out"
            />
        </a>
    );
}

export default LinkIcon;
