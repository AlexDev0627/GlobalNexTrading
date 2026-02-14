import NavBar from '../components/NavBar'
import Hero from "../components/Hero.jsx";
import Cta from "../components/Cta.jsx";
import Partners from "../components/Partners.jsx";
import Features from "../components/Feature.jsx";
import Stats from "../components/Stats.jsx";
import FAQ from '../components/FAQ.jsx';
import Marquee from "../components/Marquee.jsx"
import ScrollVariant from "../components/ui/ScrollVariant"
import Mision from '../components/Mision.jsx'
import Footer from '../components/Footer.jsx'
import Vision from '../components/Vision.jsx'
import Testimonial from '../components/Testimonial.jsx'
import CallToAction from '../components/CallToAction.jsx'

function Home() {
    return (
        /* El contenedor principal maneja el color base para evitar parpadeos */
        <div className="relative min-h-screen w-full bg-white dark:bg-black transition-colors duration-700 overflow-x-hidden">


            {/* CAPA MODO OSCURO - Usamos 'fixed' para que te siga en el scroll */}
            <div
                className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100"
                style={{
                    background: `
       radial-gradient(
         circle at top,
         rgba(255, 255, 255, 0.08) 0%,
         rgba(255, 255, 255, 0.08) 20%,
         rgba(0, 0, 0, 0.0) 60%
       )
     `}}
            />

            {/* <div
                className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-in-out opacity-100  dark:opacity-1"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)",
                }}
            /> */}

            <div className="relative z-10">
                {/* <NavBar /> */}
                <Hero />
                <Marquee />
                <Mision />
                <Vision />
                <ScrollVariant>
                    <Cta />
                </ScrollVariant>
                <ScrollVariant variant="right">
                    <Partners />
                </ScrollVariant>
                <Features />
                <FAQ />
                <Testimonial />
                <ScrollVariant>
                    <Stats />
                </ScrollVariant>
                <CallToAction />
                <Footer />
            </div>
        </div>
    )
}

export default Home;