import styles from "../styles/About.module.css";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";

export default function About() {
    return (
        <>
            <div className="my-2 mx-4 p-4  border-2 border-slate-400 rounded-xl  bg-slate-400 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                    <div className="p-4 text-xl flex flex-col justify-center rounded-xl">
                        <p className="mb-4">
                            I am Matt Walters, professional JavaScript developer
                            and software engineer.
                        </p>
                        <p className="mb-4">
                            My 15 years of competitive drumming and teaching
                            have instilled a passion for learning and dedication
                            to a craft, and I have brought those skill sets to
                            software engineering.
                        </p>
                        <p className="">
                            As a southern Califonia native, I love fresh air,
                            crisp fall nights, playing with my dogs, and some
                            great coffee.
                        </p>
                    </div>

                    <img
                        src="/headshot.jpeg"
                        className="max-h-80 mx-auto rounded-xl"
                        alt="Matt headshot"
                    />
                </div>
                <div className="flex justify-center mt-6 md:mt-0">
                    <a href="https://github.com/WaltersMatthew">
                        <img
                            src="/github.png"
                            alt="github logo"
                            className="h-20 m-4 hover:scale-125 transition duration-300 ease-in-out"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-walters13/">
                        <img
                            src="/linkedin.png"
                            alt="linkedin logo"
                            className="h-20 m-4 hover:scale-125 transition duration-300 ease-in-out"
                        />
                    </a>
                    <a href="mailto:waltersmatthew88@gmail.com">
                        <img
                            src="/email.png"
                            alt="email logo"
                            className="h-20 m-4 hover:scale-125 transition duration-300 ease-in-out"
                        />
                    </a>
                </div>
            </div>

            <div className="p-4">
                <p className="text-2xl flex justify-center m-4 text-[50px] md:text-[100px] mt-32 mb-20 font-header underline">
                    Skills
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 py-4">
                    <SkillCard src="/html.png" alt="html" skill="HTML 5" />
                    <div className="mx-auto flex flex-col">
                        <img
                            className="max-h-20 rounded-full shadow-lg"
                            src="/html.png"
                            alt="html"
                        />
                        <p className="mx-auto">HTML 5</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/css.png"
                            alt="css"
                            className="max-h-20 max-w-20 rounded-full shadow-lg "
                        />
                        <p className="mx-auto">CSS 3</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/js.png"
                            alt="javascript"
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">javascript</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/node.png"
                            alt="node"
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Node.js</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/react.png"
                            alt="react"
                            className="max-h-20 rounded-full shadow-lg "
                        />
                        <p className="mx-auto">ReactJS</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/python.png"
                            alt="python"
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Python</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/bootstrap.png"
                            alt="bootstrap"
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Bootstrap</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/tailwind.png"
                            alt="tailwind"
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Tailwind</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/mongo.png"
                            alt="mongo"
                            className="max-h-20 max-w-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto"> MongoDB</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/django.png"
                            alt="django"
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto"> Django</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/express.png"
                            alt="express"
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Express</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img
                            src="/postgres.png"
                            alt="postgres"
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">PostgreSQL</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-2xl flex justify-center  mt-32 mb-20 text-[50px] md:text-[100px] font-header underline">
                    Projects
                </p>
                <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 p-4">
                    <ProjectCard
                        src="/donewithit.png"
                        alt="done with it screencap"
                        title="DoneWithIt"
                        text="A React Native app for people to buy and sell used items. Log in, post items with photos and descriptions, and send messages. Developed with Expo, run on iOS and Android emulators with Node.JS backend."
                        liveStatus="Live Deployment Unavailable"
                        github="https://github.com/WaltersMatthew/DoneWithIt"
                    />
                    <ProjectCard
                        src="/musicly.png"
                        alt="musicly screencap"
                        title="Musicly"
                        text=" A place for students to find remote music
                        teachers. Mobile responsive app allows students
                        to sign up and find the teacher that fits their
                        needs and send lesson inquiries. Paired project
                        made with React and Django"
                        liveStatus="Live Deployment"
                        live="https://musicly-swart.vercel.app/"
                        github="https://github.com/WaltersMatthew/musicly"
                    />
                    <ProjectCard
                        src="/podcats.png"
                        alt="podcats screencap"
                        title="Pod-Cats"
                        text="A social app for all things cats! A mobile-first
                        app to find and share photos of random cats, or
                        your own furry friends. Includes a social feed
                        featuring all posts from all users. Group
                        project using React and MongoDB"
                        liveStatus="Live Deployment"
                        live="https://lucky-pudding-9e4bf7.netlify.app/"
                        github="https://github.com/WaltersMatthew/pod-cats-client"
                    />
                    <ProjectCard
                        src="/booktalk.png"
                        alt="booktalk screencap"
                        title="Booktalk"
                        text="An all-in-one spot for book lovers to find their
                        favorite books and authors, leave reviews, and
                        view their friends profiles. Solo project with
                        Express and PostgreSQL"
                        liveStatus="Live Deployment"
                        live="https://booktalk-waltersmatthew.koyeb.app/"
                        github="https://github.com/WaltersMatthew/BookTalk"
                    />
                    <ProjectCard
                        src="/FITC.png"
                        alt="Fritz in the city screencap"
                        title="Fritz in the City"
                        text="A fun take on a classic side-scrolling platform
                        hopper. Get Fritz across the skyscrapers and
                        back home to his favorite pink ball! Solo
                        project made with javascript canvas."
                        liveStatus="Live Deployment"
                        live="https://waltersmatthew.github.io/Fritz-in-the-City/"
                        github="https://github.com/WaltersMatthew/Fritz-in-the-City"
                    />
                </div>
            </div>
            <div className="mb-20 mx-4">
                <p className="mx-auto text-xl flex justify-center  mt-32 mb-20 text-[50px] md:text-[100px] font-header underline">
                    Get in touch
                </p>
                <div className="my-2 p-4  border-2 border-slate-400 rounded-xl bg-slate-400 ">
                    <p className="my-2 text-xl">
                        I am currently in the process of interviewing and would
                        love to connect if you have an opportunity that I might
                        be a good fit for.
                    </p>
                    <p className="my-2 text-xl">
                        If you would like to grab coffee and chat about some
                        freelance work, I am also open to those conversations!
                    </p>

                    <div className="md:flex justify-around">
                        <div className="">
                            <p className="my-2 text-xl">
                                Email me:
                                <a
                                    className="underline"
                                    href="mailto:waltersmatthew88@gmail.com"
                                >
                                    <button className="bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl hover:scale-110 transition duration-300 ease-in-out">
                                        waltersmatthew88@gmail.com
                                    </button>
                                </a>
                            </p>
                        </div>
                        <div>
                            <p className="my-2 text-xl">
                                Find me on LinkedIn:
                                <a
                                    className="underline"
                                    href="https://www.linkedin.com/in/matthew-walters13/"
                                >
                                    <button className="bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl hover:scale-110 transition duration-300 ease-in-out">
                                        in/matthew-walters13
                                    </button>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
