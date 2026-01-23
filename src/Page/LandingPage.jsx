import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import About from '../components/About'
import Footer from "../components/Footer";
// import Location from '../components/Location'
// import InstagramSection from "../components/InstagramSection";

export default function LandingPage () {
    return (
        <>
            <Navbar />
            <Hero/>
            <About/>
            {/* <Location/>
            <InstagramSection/> */}
            <Footer/>
        </>
    )
}