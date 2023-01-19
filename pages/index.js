import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>{`Matthew Walters`}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* useRef + scrolling  */}
            <h1 className="flex justify-center text-[60px] md:text-[100px] mt-10 font-header">
                Matthew Walters
            </h1>
        </div>
    );
}
