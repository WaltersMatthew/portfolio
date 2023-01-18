import Image from "next/image";

export default function SkillCard(props) {
    return (
        <div className="mx-auto flex flex-col">
            <Image
                className="rounded-full shadow-lg"
                src={props.src}
                alt={props.alt}
                height="100"
                width="100"
            />
            <p className="mx-auto">{props.skill}</p>
        </div>
    );
}
