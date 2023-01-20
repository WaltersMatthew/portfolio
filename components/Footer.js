export default function Footer() {
    return (
        <div className="mb-20 mx-4">
            <p className="mx-auto text-xl flex justify-center  mt-32 mb-20 text-[50px] md:text-[100px] font-header underline">
                Get in touch
            </p>
            <div className="my-2 p-4  border-2 border-slate-400 rounded-xl bg-slate-400 ">
                <p className="my-2 text-xl">
                    I am currently in the process of interviewing and would love
                    to connect if you have an opportunity that I might be a good
                    fit for.
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
                                rel="noreferrer"
                                target="_blank"
                            >
                                <button className="bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl hover:scale-110 transition duration-300 ease-in-out">
                                    in/matthew-walters13
                                </button>
                            </a>
                        </p>
                    </div>
                    <div>
                        <p className="my-2 text-xl">
                            Find my resume:
                            <a
                                className="underline"
                                href="https://docs.google.com/document/d/1lZKVE7m6OQ0c-OrdIto1hGfQp3ZbUtNEj2wURtz1t6U/edit"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <button className="bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl hover:scale-110 transition duration-300 ease-in-out">
                                    Here!
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
