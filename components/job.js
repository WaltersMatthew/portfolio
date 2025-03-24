export default function Job(props) {
    const urlMap = props.urls.map(({ href, label }, index) => (
        <a
            key={`url${index}`}
            href={href}
            className="border-black rounded-lg bg-slate-700 hover:bg-black text-white transition ease-in-out m-2 p-2 px-6"
        >
            {label}
        </a>
    ));

    return (
        <div className="bg-slate-400 p-4 rounded-lg flex flex-col justify-between">
            <div>
                <p className="font-bold">{props.company}</p>
                <p className="flex justify-between my-4">
                    {props.title}
                    <span className="italic">{props.time}</span>
                </p>
                <p>{props.description}</p>
            </div>
            <div className="flex flex-wrap justify-around mt-10">{urlMap}</div>
        </div>
    );
}
