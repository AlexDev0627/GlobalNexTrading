import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';
import Cta from '../components/Cta.jsx';
import Features2 from '../components/Features2.jsx';
import Features3 from '../components/Features3.jsx';
import CallToAction from '../components/CallToAction.jsx';
import FAQ from '../components/FAQ.jsx'
const Services = () => {
    return (
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
                <Hero
                    titleMargin="mt-12"
                    height="sm:h-[80vh]"
                    showIcons={false}
                    images={['./pic4.jpg', './pic5.jpg', './pic6.jpg', './pic7.jpg']}
                    // gradientText=""
                    titlePrefix={
                        <>
                            Explora Nuestros <br></br><span className="text-lime-400">Servicios mas Destacados</span>

                        </>
                    }
                    description="En GlobalNexTrading, nos posicionamos como su socio estratégico definitivo para navegar la complejidad del comercio internacional, ofreciendo una gama soluciones logísticas integrales diseñadas para impulsar su competitividad. Nuestro enfoque abarca desde la consultoría especializada y la gestión aduanera eficiente, hasta la logística de transporte multimodal y el almacenamiento seguro, permitiéndonos optimizar cada eslabón de su cadena de suministro. Al aprovechar nuestra red global y profundo conocimiento de los mercados, facilitamos el acceso a nuevas oportunidades internacionales, asegurando que sus productos crucen fronteras con rapidez, cumplimiento normativo y total seguridad, transformando los desafíos logísticos en ventajas comerciales estratégicas para su empresa." />

                <Features2 />
                <Features3 />
                <CallToAction />
                <FAQ />
                <Footer />

            </div>
        </div>
    );
}

export default Services;