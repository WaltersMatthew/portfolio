import React from "react";
import Image from "next/image";

function Freejob(props) {
    return (
        <div className="bg-slate-400 p-4 rounded-lg flex flex-col justify-between  overflow-hidden">
            <p className="font-bold text-xl mb-2">{props.job}</p>
            <div className="hover:scale-110 transition duration-300 ease-in-out">
                <Image
                    layout="responsive"
                    height={200}
                    width={300}
                    src={props.src}
                    alt={props.job}
                />
            </div>
        </div>
    );
}

export default Freejob;
