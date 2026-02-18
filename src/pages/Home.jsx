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



            <div className="relative z-10">
                {/* <NavBar /> */}
                <Hero
                    images={['./pic1.jpg',
                        './pic2.jpg',
                        './pic3.png',
                        './pic4.jpg',
                        './pic5.jpg',
                        './pic6.jpg',
                        './pic7.jpg']}

                    gradientText="Global Next Trading"
                    titleMargin="mb-10"
                    titlePrefix="El socio estratégico para un mundo sin fronteras"
                    description="Somos una empresa venezolana con ADN global. Nos especializamos en la comercialización, distribución, almacenamiento, importación y exportación de una amplia gama de productos, conectando la producción nacional con mercados internacionales y viceversa." />

                <ScrollVariant>
                    <Marquee />
                </ScrollVariant>
                <Mision
                    imageSrc="./pic4.jpg"
                    titlePrefix={<>
                        ¿Está listo para hacer <span className="text-lime-500">crecer</span> su <span className="text-lime-500">negocio?</span>
                    </>}
                    des="Facilitar el crecimiento de nuestros aliados comerciales a través de soluciones logísticas integrales y servicios de comercialización de alta calidad, conectando eficientemente a Venezuela con el resto del mundo mediante procesos transparentes, innovadores y seguros."
                />
                <ScrollVariant>
                    <Vision />
                </ScrollVariant>
                <Features />
                <ScrollVariant>
                    <Cta />
                </ScrollVariant>
                {/* <FAQ /> */}
                <ScrollVariant>
                    <Testimonial />
                </ScrollVariant>
                <ScrollVariant>
                    <Stats />
                </ScrollVariant>
                <ScrollVariant>
                    <CallToAction />
                </ScrollVariant>
                <Footer />
            </div>
        </div>
    )
}

export default Home;