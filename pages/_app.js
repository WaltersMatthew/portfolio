import '../styles/globals.css'
import NavBar from '../components/navBar'
import About from './about'
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* header */}
      <NavBar />
      {/* aside */}
      <Component {...pageProps} />
      <About />
      {/* footer */}
    </>
  )
}

export default MyApp
