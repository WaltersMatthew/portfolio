import Image from "next/image";
import React from "react";

export default function ProjectCard(props) {
    return (
        <div className="max-w-sm bg-slate-400 md:mb-10 rounded overflow-hidden shadow-lg mx-auto hover:scale-110 transition duration-300 ease-in-out">
            <div className="flex justify-center">
                <Image
                    className="max-h-64"
                    height={props.height}
                    width={props.width}
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-base">{props.text}</p>
                <div className="flex justify-between mt-10 items-end">
                    <a
                        className="underline"
                        href={props.live}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <button className="bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl">
                            {props.liveStatus}
                        </button>
                    </a>

                    <a
                        className="hover:opacity-50"
                        href={props.github}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Image
                            height={100}
                            width={100}
                            alt="github logo"
                            className="max-h-14"
                            src="/github.png"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
