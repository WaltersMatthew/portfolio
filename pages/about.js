import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function About(){
    return( 
        <>
            <div className='bg: my-4 p-4'>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-20 mt-10">
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
                <p className="text-2xl flex justify-center m-4">My tech stack</p>
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
                        <img class="w-full" src="/favicon.ico" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-sm bg-slate-300 rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="/favicon.ico" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-sm bg-slate-300 rounded overflow-hidden shadow-lg mx-auto">
                        <img class="w-full" src="/favicon.ico" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}