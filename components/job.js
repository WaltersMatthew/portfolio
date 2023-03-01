import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

export default function Job(props) {
    return (
        <div className="bg-slate-400 p-4 rounded-lg">
            <p className="font-bold ">{props.company}</p>
            <p className="flex justify-between my-4">
                {props.title}
                <span className="italic">{props.time}</span>
            </p>
            <p className="flex justify-center">{props.description}</p>
        </div>
    );
}
