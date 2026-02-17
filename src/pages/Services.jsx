import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';
import Cta from '../components/Cta.jsx';
const Services =()=>{
    return(
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

        

            <div className="relative z-10 pt-10">
                <Hero 
                titleMargin="mb-80"
                height="h-[60vh]"
                showIcons = {false}
                images={['./pic4.jpg','./pic5.jpg','./pic6.jpg','./pic7.jpg']}
                // gradientText=""
                titlePrefix={
                    <> 
                    Explora Nuestros <br></br><span className="text-lime-400">Servicios mas Destacados</span>

                    </>
                }
                description="En GlobalNexTrading, ofrecemos soluciones integrales para el comercio internacional, facilitando el acceso a mercados globales y optimizando la cadena de suministro."/>

                <Cta />
                <Footer />

            </div>
       </div>
   );
}

export default Services;