import Image from "next/image";
import React from "react";

function LinkIcon(props) {
    return (
        <a className="mx-4" target="_blank" rel="noreferrer" href={props.href}>
            <Image
                width={100}
                height={100}
                src={props.src}
                alt={props.alt}
                className="h-20 m-4 hover:scale-125 transition duration-300 ease-in-out"
            />
        </a>
    );
}

export default LinkIcon;
