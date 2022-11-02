import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function About(){
    return( 
        <>
            <div className='bg: my-2 p-4'>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                    <div className="p-4 text-xl flex flex-col justify-center">
                        <p className="mb-4">
                            &emsp;I am Matt Walters, a pet lover, programmer, and drummer.
                        </p> 
                        <p className="mb-4">
                        &emsp; My drumming instilled a passion for learning and dedication to a craft, and I have brought those skill sets to software engineering.
                        </p>
                        <p className="mb-4">
                        &emsp; As a southern Califonia native, I love fresh air, crisp fall nights, and some great coffee.
                        </p>
                    </div>

                        <img 
                            src='/headshot.jpeg' 
                            className='rounded-full max-h-80 mx-auto'
                            al="Matt headshot"
                        />      
                    </div>
                    <div className="flex justify-center">
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
                </div>
            </div>

            <div className="p-4">
                {/* <p className="text-2xl flex justify-center m-4">My tech stack</p> */}
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
                <p className="text-2xl flex justify-center">Projects</p>
                <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 p-4">
                    <div class="max-w-sm bg-slate-300 rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="/musicly.png" alt="musicly screencap" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Musicly</div>
                                <p class="text-gray-700 text-base">
                                    A place for students to find remote music teachers. Mobile responsive app allows students to sign up and find the teacher that fits their needs and send lesson inquiries. Paired project made with React and Django
                                </p>
                                <div className='flex justify-between mt-10 items-end'>
                                    <a className="underline" href="https://musicly-swart.vercel.app/">Live Deployment</a>
                                    <a href="https://github.com/WaltersMatthew/musicly"><img className='max-h-14' src='github.png'/></a>
                                </div>                                    
                        </div>
                    </div>
                    <div class="max-w-sm bg-slate-300 rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full max-h-64" src="/podcats.png" alt="podcats screencap" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Pod-Cats</div>
                                <p class="text-gray-700 text-base">
                                A social app for all things cats! A mobile-first app to find and share photos of random cats, or your own furry friends. Includes a "feed" featuring all posts from all users. Group project using React and MongoDB
                                </p>
                                <div className='flex justify-between mt-10 items-end'>
                                    <a className="underline" href="https://lucky-pudding-9e4bf7.netlify.app/">Live Deployment</a>
                                    <a href="https://github.com/WaltersMatthew/pod-cats-client"><img className='max-h-14' src='github.png'/></a>
                                </div>
                        </div>
                    </div>
                    <div class="max-w-sm bg-slate-300 rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full max-h-64" src="/booktalk.png" alt="booktalk screencap" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">BookTalk</div>
                                <p class="text-gray-700 text-base">
                                    An all-in-one spot for book lovers to find their favorite books and authors, leave reviews, and view their friends profiles. Solo project with Express and PostgreSQL
                                </p>
                                <div className='flex justify-between mt-10 items-end'>
                                    <a className="underline" href="https://booktalk-waltersmatthew.koyeb.app/">Live Deployment</a>
                                    <a href="https://github.com/WaltersMatthew/BookTalk"><img className='max-h-14' src='github.png'/></a>
                                </div>
                        </div>
                    </div>
                    <div class="max-w-sm bg-slate-300 rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="/FITC.png" alt="Fritz in the city screencap" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Fritz in the City</div>
                                <p class="text-gray-700 text-base">
                                    A fun take on a classing side-scrolling platform hopper. Get Fritz across the skyscrapers and back home to his favorite pink ball! Solo project made with javascript canvas
                                </p>
                                <div className='flex justify-between mt-10 items-end'>
                                    <a className="underline" href="https://waltersmatthew.github.io/Fritz-in-the-City/">Live Deployment</a>
                                    <a href="https://github.com/WaltersMatthew/Fritz-in-the-City"><img className='max-h-14' src='github.png'/></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}