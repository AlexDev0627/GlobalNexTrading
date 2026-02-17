import { Link } from 'react-router-dom';
import Button from './ui/Button';
const CallToAction = () => {
    const image = 'pic6.jpg';
    return (
        <>

            <section className="relative px-20 rounded-20">

                <div className=" relative px-8 py-12 md:py-20 mb-40 rounded-[20px]  bg-cover bg-center bg-no-repeat overflow-hidden bg-fixed"
                    style={{ backgroundImage: `url(${image})` }}>

                    <div className="absolute bg-black/70 inset-0 h-full w-full z-0 overflow-hidden"></div>
                    <div className="relative text-center z-10">
                        <h3 className="text-gray-200 dark:text-gray-300 text-3xl font-semibold sm:text-4xl mb-4">
                            ¿Listo para mover tu carga al <br></br><span className="text-lime-400">siguiente puerto</span>?
                        </h3>
                        <p className="text-center text-lg text-gray-300 dark:text-slate-400 max-w-2xl max-w-md m-auto">
                            Llegamos a los puertos más importantes del mundo. Solicite una cotización personalizada y descubra cómo podemos agilizar sus importaciones y exportaciones.
                        </p>
                        <Link
                        className="inline-block mt-8" 
                        to="/contact">  
                        <Button />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction;