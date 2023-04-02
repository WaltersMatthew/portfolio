export default function Job(props) {
    const extractTextFromUrl = (url) => {
        const regex = /^(https?:\/\/)?(www\.)?([^.\/]+)\.(com|org)$/;
        const match = url.match(regex);
        if (match) {
            return match[3];
        } else {
            console.log(url);
            return null;
        }
    };
    const urlMap = props.urls.map((url) => {
        return (
            <a
                key={`url${url}`}
                href={url}
                className="border-black rounded-lg bg-slate-700 hover:bg-black text-white transition ease-in-out m-2 p-2 px-6"
            >
                {extractTextFromUrl(url)}
            </a>
        );
    });

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
