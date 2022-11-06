import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function About(){
    return( 
        <>
            <div className='my-2 p-4  border-2 border-slate-400 rounded-xl  bg-slate-400 '>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                    <div className="p-4 text-xl flex flex-col justify-center rounded-xl">
                        <p className="mb-4">
                        I am Matt Walters, a pet lover, programmer, and drummer.
                        </p> 
                        <p className="mb-4">
                        My drumming instilled a passion for learning and dedication to a craft, and I have brought those skill sets to software engineering.
                        </p>
                        <p className="">
                        As a southern Califonia native, I love fresh air, crisp fall nights, and some great coffee.
                        </p>
                    </div>

                        <img 
                            src='/headshot.jpeg' 
                            className='max-h-80 mx-auto rounded-xl'
                            alt="Matt headshot"
                        />      
                    </div>
                    <div className="flex justify-center mt-6 md:mt-0">
                        <a href="https://github.com/WaltersMatthew">
                            <img
                                src="/github.png" 
                                alt="github logo"
                                className='h-20 m-4'
                            />
                        </a>  
                        <a href="https://www.linkedin.com/in/matthew-walters13/">
                            <img 
                                src="/linkedin.png"
                                alt="linkedin logo"
                                className='h-20 m-4'
                            />
                        </a>
                        <a href="mailto:waltersmatthew88@gmail.com">
                            <img
                                src="/email.png"
                                alt="email logo"
                                className='h-20 m-4'
                            />
                        </a>
                    </div>
            </div>

            <div className="p-4">
                <p className="text-2xl flex justify-center m-4 text-[50px] md:text-[100px] mt-32 mb-20 font-header underline">Skills</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 py-4">
                    <div className="mx-auto flex flex-col">
                        <img 
                            className="max-h-20 rounded-full shadow-lg"
                            src='/html.png'
                            alt='html'
                            />
                        <p className="mx-auto">HTML 5</p>
                    </div> 

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/css.png'
                            alt='css'
                            className="max-h-20 max-w-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">CSS 3</p>
                    </div>  

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/js.png'
                            alt='javascript'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">javascript</p>
                    </div> 

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/node.png'
                            alt='node'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Node.js</p>
                    </div>  

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/react.png'
                            alt='react'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">ReactJS</p>
                    </div>

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/python.png'
                            alt='python'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Python</p>
                    </div>    

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/bootstrap.png'
                            alt='bootstrap'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Bootstrap</p>
                    </div>  

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/tailwind.png'
                            alt='tailwind'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Tailwind</p>
                    </div>  

                    
                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/mongo.png'
                            alt='mongo'
                            className="max-h-20 max-w-20 rounded-full shadow-lg"
                        />
                       <p className="mx-auto"> MongoDB</p>
                    </div>    

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/django.png'
                            alt='django'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                       <p className="mx-auto"> Django</p>
                    </div>    

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/express.png'
                            alt='express'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">Express</p>
                    </div>    

                    <div className="mx-auto flex flex-col">
                        <img 
                            src='/postgres.png'
                            alt='postgres'
                            className="max-h-20 rounded-full shadow-lg"
                        />
                        <p className="mx-auto">PostgreSQL</p>
                    </div>    
                </div>
            </div>
            <div>
                <p className="text-2xl flex justify-center  mt-32 mb-20 text-[50px] md:text-[100px] font-header underline">Projects</p>
                <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 p-4">
                    <div className="max-w-sm bg-slate-400 rounded overflow-hidden shadow-lg mx-auto">
                        <img className="w-full" src="/musicly.png" alt="musicly screencap" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Musicly</div>
                                <p className="text-base">
                                    A place for students to find remote music teachers. Mobile responsive app allows students to sign up and find the teacher that fits their needs and send lesson inquiries. Paired project made with React and Django
                                </p>
                                <div className='flex justify-between mt-10 items-end'>
                                    <a className="underline" href="https://musicly-swart.vercel.app/"><button className='bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl'>Live Deployment</button></a>
                                    <a href="https://github.com/WaltersMatthew/musicly"><img className='max-h-14' src='github.png' alt="github logo"/></a>
                                </div>                                    
                        </div>
                    </div>
                    <div className="max-w-sm bg-slate-400 rounded overflow-hidden shadow-lg mx-auto">
                        <img className="w-full max-h-64" src="/podcats.png" alt="podcats screencap" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Pod-Cats</div>
                                <p className="text-base">
                                A social app for all things cats! A mobile-first app to find and share photos of random cats, or your own furry friends. Includes a  social feed featuring all posts from all users. Group project using React and MongoDB
                                </p>
                                <div className='flex justify-between mt-10 items-end'>
                                    <a className="underline" href="https://lucky-pudding-9e4bf7.netlify.app/"><button className='bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl'>Live Deployment</button></a>
                                    <a href="https://github.com/WaltersMatthew/pod-cats-client"><img className='max-h-14' src='github.png' alt="github logo"/></a>
                                </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-slate-400 rounded overflow-hidden shadow-lg mx-auto">
                        <img className="w-full max-h-64" src="/booktalk.png" alt="booktalk screencap" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">BookTalk</div>
                                <p className="text-base">
                                    An all-in-one spot for book lovers to find their favorite books and authors, leave reviews, and view their friends profiles. Solo project with Express and PostgreSQL
                                </p>
                                <div className='flex justify-between mt-10 items-end'>
                                    <a className="underline" href="https://booktalk-waltersmatthew.koyeb.app/"><button className='bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl'>Live Deployment</button></a>
                                    <a href="https://github.com/WaltersMatthew/BookTalk"><img className='max-h-14' src='github.png' alt="github logo"/></a>
                                </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-slate-400 rounded overflow-hidden shadow-lg mx-auto">
                        <img className="w-full" src="/FITC.png" alt="Fritz in the city screencap" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Fritz in the City</div>
                                <p className="text-base">
                                    A fun take on a classic side-scrolling platform hopper. Get Fritz across the skyscrapers and back home to his favorite pink ball! Solo project made with javascript canvas
                                </p>
                                <div className='flex justify-between mt-10 items-end'>
                                    <a className="underline" href="https://waltersmatthew.github.io/Fritz-in-the-City/"><button className='bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl'>Live Deployment</button></a>
                                    <a href="https://github.com/WaltersMatthew/Fritz-in-the-City"><img className='max-h-14' src='github.png' alt="github logo"/></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <p className='mx-auto text-xl flex justify-center  mt-32 mb-20 text-[50px] md:text-[100px] font-header underline'>Get in touch</p>
                <div className="my-2 p-4  border-2 border-slate-400 rounded-xl bg-slate-400 ">
                    <p className="my-2 text-xl">
                        I am currently in the process of interviewing and would love to connect if you have an opportunity that I might be a good fit for.
                    </p>
                    <p className="my-2 text-xl">
                        If you would like to grab coffee and chat about some freelance work, I am also open to those conversations! 
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <p className="my-2 text-xl">   
                            Email me:
                            <a className="underline" href="mailto:waltersmatthew88@gmail.com">
                                <button className='bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl'>
                                    waltersmatthew88@gmail.com
                                </button>
                            </a> 
                        </p>
                        <p className='my-2 text-xl'>
                            Find me on LinkedIn: 
                            <a className='underline' href="https://www.linkedin.com/in/matthew-walters13/">
                                <button className='bg-slate-700 hover:bg-black text-white transition ease-in-out mx-2 p-2 rounded-xl'>
                                    in/matthew-walters13
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}