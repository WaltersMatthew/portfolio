import React from "react";
import Image from "next/image";

function Freejob(props) {
    return (
        <div className="bg-slate-400 p-4 rounded-lg flex flex-col justify-between  overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
            <div className="flex justify-between">
                <p className="font-bold text-xl mb-2">{props.job}</p>
                <a
                    className="underline"
                    href={props.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.href.slice(12)}
                </a>
            </div>
            <a href={props.href} target="_blank" rel="noreferrer">
                <Image
                    layout="responsive"
                    height={180}
                    width={300}
                    src={props.src}
                    alt={props.job}
                />
            </a>
        </div>
    );
}

export default Freejob;
