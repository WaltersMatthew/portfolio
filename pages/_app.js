import "../styles/globals.css";
import NavBar from "../components/navBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Freelance from "../components/Freelance";
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <About />
            <Experience />
            <Freelance />
            <Skills />
            <Projects />
            {/* footer */}
            <Footer />
        </>
    );
}

export default MyApp;
