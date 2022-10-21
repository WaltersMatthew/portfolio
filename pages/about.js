import styles from '../styles/About.module.css'
import Image from 'next/image'
export default function About(){
    return( 
        <div>
            <h1>About me!</h1>
            <p className={styles.extraGreen}>Hi I'm Matt, I make super cool stuff with the codes!</p>

            {/* load an image locally */}
            <Image
                src='/TRT.png'
                alt='logo'
                height={300}
                width={600}
            />

            {/* <img
                src='/TRT.png'
                alt='spoopy'
            /> */}

            {/* load an image hosted on another domain */}
            <Image
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={400}
                height={500}
            />
        </div>
    )
}