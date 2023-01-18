import "../styles/globals.css";
import NavBar from "../components/navBar";
import About from "./about";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* header */}
            <NavBar />
            {/* aside */}
            <Component {...pageProps} />
            <About />
            <Skills />
            <Projects />
            {/* footer */}
            <Footer />
        </>
    );
}

export default MyApp;
