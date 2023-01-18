import React from "react";

export default function ProjectCard(props) {
    return (
        <div className="max-w-sm bg-slate-400 rounded overflow-hidden shadow-lg mx-auto hover:scale-110 transition duration-300 ease-in-out">
            <div className="flex justify-center">
                <img
                    className="max-h-64"
                    width={props.width}
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-base">{props.text}</p>
                <div className="flex justify-between mt-10 items-end">
                    <a className="underline" href={props.live}>
                        <button className="bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl hover:scale-125 transition duration-300 ease-in-out">
                            {props.liveStatus}
                        </button>
                    </a>

                    <a href={props.github}>
                        <img
                            className="max-h-14 hover:scale-125 transition duration-300 ease-in-out"
                            src="github.png"
                            alt="github logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}