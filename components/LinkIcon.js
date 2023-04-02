import Image from "next/image";
import React from "react";

function LinkIcon(props) {
    return (
        <a
            className="mx-4 hover:opacity-50"
            target="_blank"
            rel="noreferrer"
            href={props.href}
        >
            <Image
                width={100}
                height={100}
                src={props.src}
                alt={props.alt}
                className="h-20 m-4"
            />
        </a>
    );
}

export default LinkIcon;
