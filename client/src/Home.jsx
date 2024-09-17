import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";
import AboutUs from "./components/About";
import Footer from "./components/Footer";

export default function Home(){
    return <>
        <Nav/>
        <Hero/>
        <Mission/>
        <Services/>
        <AboutUs/>
        <Footer/>
    </>
}