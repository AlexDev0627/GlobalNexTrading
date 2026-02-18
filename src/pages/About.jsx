import Hero from '../components/Hero.jsx';
import Partners from "../components/Partners";
import Footer from '../components/Footer.jsx'
import FAQ from '../components/FAQ.jsx'
import Form from '../components/Form.jsx'
import Mision from '../components/Mision.jsx'
import Marquee from '../components/Marquee.jsx';
import ScrollVariant from "../components/ui/ScrollVariant"




const About =()=>{
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
                titleMargin="mb-60"
                height="sm:h-[70vh]"
                showIcons = {false}
                images={['./pic4.jpg','./pic5.jpg','./pic6.jpg','./pic7.jpg']}
                // gradientText=""
                titlePrefix={
                    <> 
                    Mas acerca de <span className="text-lime-400">Nosotros</span>
                    <h2 className="text-3xl font-bold mt-4 mb-4">¿<span className="text-lime-400">Quienes somos?</span>?</h2>

                    </>
                }
                description="En Global Next Trading, somos una empresa venezolana con ADN global. Nos especializamos en la comercialización, distribución, almacenamiento, importación y exportación de una amplia gama de productos, conectando la producción nacional con mercados internacionales y viceversa.
Con años de experiencia en el sector del comercio exterior, entendemos que la logística no se trata solo de mover mercancía, sino de mover oportunidades. Nuestra presencia internacional nos permite ofrecer soluciones integrales que simplifican la complejidad del intercambio comercial, garantizando eficiencia y seguridad en cada etapa de la cadena de suministro."/>

                <ScrollVariant>
                <Marquee />
                </ScrollVariant>

                <Mision 
                marginTop="mt-0"
                
                reverse = {true}
                titlePrefix={
                    <>
                    Nuestra <span className="text-lime-400">Misión</span>
                    </>
                }
                des="Facilitar el crecimiento de nuestros aliados comerciales a través de soluciones logísticas integrales y servicios de comercialización de alta calidad, conectando eficientemente a Venezuela con el resto del mundo mediante procesos transparentes, innovadores y seguros."/>

                <Mision 
                imageSrc="./pic7.jpg"
                marginTop="mt-0"
                reverse = {false}
                titlePrefix={
                    <>
                    Nuestra <span className="text-lime-400">Visión</span>
                    </>
                }
                des="Consolidarnos para el año 2030 como la plataforma logística y comercial líder en la región, siendo reconocidos por nuestra capacidad de adaptación tecnológica, nuestra excelencia operativa y por ser el puente indispensable para el comercio internacional en Venezuela."/>
                <Partners />
                <FAQ />
                <Form />    
                <Footer />


            </div>
       </div>
   );
}

export default About;