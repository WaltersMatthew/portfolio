import "../styles/globals.css";
import NavBar from "../components/navBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <About />
            <Experience />
            <Skills />
            <Projects />
            {/* footer */}
            <Footer />
        </>
    );
}

export default MyApp;
