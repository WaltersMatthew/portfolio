import React from "react";
import ProjectCard from "./ProjectCard";

function Projects(props) {
    return (
        <div>
            <p className="text-2xl flex justify-center  mt-32 mb-20 text-[75px] md:text-[100px] font-header underline">
                Projects
            </p>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 p-4">
                <ProjectCard
                    width={400}
                    height={300}
                    src="/colorbutton.png"
                    alt="Color Button screencap"
                    title="Color Button"
                    text="A simple React app to learn test writing with Jest. Button changes color on click and is disabled on checkbox click. 100% testing coverage."
                    liveStatus="Live Deployment"
                    live="https://color-button.vercel.app/"
                    github="https://github.com/WaltersMatthew/DoneWithIt"
                />
                <ProjectCard
                    width={175}
                    height={300}
                    src="/donewithit.png"
                    alt="done with it screencap"
                    title="DoneWithIt"
                    text="A React Native app for people to buy and sell used items. Log in, post items with photos and descriptions, and send messages. Developed with Expo, run on iOS and Android emulators with Node.JS backend."
                    liveStatus="Live Deployment Unavailable"
                    github="https://github.com/WaltersMatthew/DoneWithIt"
                />
                <ProjectCard
                    width={400}
                    height={300}
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
                    width={400}
                    height={300}
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
                    width={400}
                    height={300}
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
                    width={400}
                    height={300}
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
    );
}

export default Projects;
