import React from "react";
import ProjectCard from "./ProjectCard";

function Projects(props) {
    return (
        <div>
            <p className="text-2xl flex justify-center mt-32 mb-20 text-[75px] md:text-[100px] font-header underline">
                Projects
            </p>
            <p className="text-center text-5xl mb-10 border-b-4 border-black font-header">
                Fullstack
            </p>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 p-4">
                <ProjectCard
                    width={400}
                    height={300}
                    src="/sundaes.png"
                    alt="sundaes screencap"
                    title="Sundaes On Demand"
                    text="A React app to practice Jest testing library. 100% testing coverage, using unit testing and functional testing. Includes code and mock service worker for running Node.js server, or running serverless."
                    liveStatus="Live Deployment"
                    live="https://sundaes-on-demand.vercel.app/"
                    github="https://github.com/WaltersMatthew/sundaes-on-demand"
                />

                <ProjectCard
                    width={175}
                    height={300}
                    src="/donewithit.png"
                    alt="done with it screencap"
                    title="DoneWithIt"
                    text="A React Native app for people to buy and sell used items. Log in, post items with photos and descriptions, and send messages. Developed with Expo, and run on iOS/Android emulators with Node.JS backend."
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
            </div>
            <div className="">
                <p className="text-center text-5xl mb-10 font-header border-b-4 border-black">
                    Frontend
                </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 p-4">
                <ProjectCard
                    width={150}
                    height={300}
                    src="/BCC.png"
                    alt="Coffee Screencap"
                    title="Broken City Coffee"
                    text="Step into the world of Broken City Coffee, a React-powered coffee shop experience. Explore the menu, manage your selections with dynamic state hooks, and indulge in a journey enhanced by local storage persistence and Tailwind CSS elegance."
                    liveStatus="Live Deployment"
                    live="https://broken-city-coffee.vercel.app/"
                    github="https://github.com/WaltersMatthew/BrokenCityCoffee"
                />
                <ProjectCard
                    width={400}
                    height={300}
                    src="/pokedex.png"
                    alt="Pokemon battle screencap"
                    title="Pokemon Battle!"
                    text="A fun way to get quick pokemon battles. Each refresh fills both teams with random first generation pokemon with custom borders for types and battle the teams based on exp points"
                    liveStatus="Live Deployment"
                    live="https://pokemon-battle-kappa.vercel.app/"
                    github="https://github.com/WaltersMatthew/Pokemon-battle"
                />
                <ProjectCard
                    width={400}
                    height={300}
                    src="/ecomm.png"
                    alt="Ecommerce Mock screencap"
                    title="Ecommerce Mock"
                    text="Using a dummy data API to populate a React site. Using BrowserRouter for navigation and using the Link component to pass props. Styled with TailwindCSS class names"
                    liveStatus="Live Deployment"
                    live="https://ecommerce-mockup-gray.vercel.app/"
                    github="https://github.com/WaltersMatthew/Ecomm"
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
