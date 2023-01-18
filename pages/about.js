export default function About() {
    return (
        <div className="my-2 mx-4 p-4  border-2 border-slate-400 rounded-xl  bg-slate-400 ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                <div className="p-4 text-xl flex flex-col justify-center rounded-xl">
                    <p className="mb-4">
                        I am Matt Walters, professional JavaScript developer and
                        software engineer.
                    </p>
                    <p className="mb-4">
                        My 15 years of competitive drumming and teaching have
                        instilled a passion for learning and dedication to a
                        craft, and I have brought those skill sets to software
                        engineering.
                    </p>
                    <p className="">
                        As a southern Califonia native, I love fresh air, crisp
                        fall nights, playing with my dogs, and some great
                        coffee.
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
    );
}
