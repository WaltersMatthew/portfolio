import Image from "next/image";
import LinkIcon from "./LinkIcon";

export default function About() {
    return (
        <div className="my-2 mx-4 p-4  border-2 border-slate-400 rounded-xl  bg-slate-400 ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                <div className="p-4 text-xl flex flex-col justify-center rounded-xl">
                    <p className="mb-4">
                        Hello! My name is Matt Walters and I am a Full-Stack
                        Software Engineer based in Southern California. When I
                        am not coding, I enjoy spending time outside with my
                        dogs or savoring a delicious cup of coffee.
                    </p>
                    <p className="mb-4">
                        Fun fact about me: I am a competitive drummer and
                        percussion instructor with over 15 years of experience
                        playing around the world and teaching students at
                        various ensembles in Southern California. I have found
                        that the focus and dedication required in music have
                        translated well into my software engineering work,
                        driving me to continually learn and improve.
                    </p>
                    <p className="">
                        Creating elegant, functional solutions that meet the
                        needs of my clients and users is my passion. For me,
                        software engineering is all about collaboration,
                        creativity, and problem-solving. This field is
                        constantly evolving, and I am thrilled to be a part of
                        it. If you are interested in learning more about me or
                        my work, please connect with me on LinkedIn or over
                        email.
                    </p>
                </div>
                <div className="flex justify-center -mt-10 md:mt-0">
                    <Image
                        width={350}
                        height={350}
                        src="/headshot.jpeg"
                        className="max-h-80 mx-auto rounded-xl"
                        alt="Matt headshot"
                        layout="fixed"
                        priority="true"
                    />
                </div>
            </div>
            <div target="_blank" className="flex justify-center mt-6 md:mt-4">
                <LinkIcon
                    href="https://github.com/WaltersMatthew"
                    src="/github.png"
                    alt="github logo"
                />
                <LinkIcon
                    href="https://www.linkedin.com/in/matthew-walters13/"
                    src="/linkedin.png"
                    alt="linkedin logo"
                />
                <LinkIcon
                    href="mailto:waltersmatthew88@gmail.com"
                    src="/email.png"
                    alt="email logo"
                />
                <LinkIcon
                    href="/resume.pdf"
                    src="/resume.png"
                    alt="resume logo"
                />
            </div>
        </div>
    );
}
