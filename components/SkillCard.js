import Image from "next/image";

export default function SkillCard(props) {
    return (
        <div className="mx-auto flex flex-col">
            <Image
                className="rounded-full"
                src={props.src}
                alt={props.alt}
                height="90"
                width="95"
            />
            <p className="mx-auto pt-2 text-lg">{props.skill}</p>
        </div>
    );
}
