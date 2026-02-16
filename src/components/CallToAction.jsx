const CallToAction = () => {
    const image = 'pic6.jpg';
    return (
        <>

            <section className="relative px-20 rounded-20">

                <div className=" relative px-8 py-12 md:py-20 mb-40 rounded-[20px]  bg-cover bg-center bg-no-repeat overflow-hidden bg-fixed"
                    style={{ backgroundImage: `url(${image})` }}>

                    <div className="absolute bg-black/70 inset-0 h-full w-full z-0 overflow-hidden"></div>
                    <div className="relative text-center z-10">
                        <h3 className="text-3xl md:text-4xl leading-tight font-semibold tracking-tighter max-w-xl mx-auto mb-4 text-white dark:text-white">
                            ¿Listo para mover tu carga al <span className="text-lime-400">siguiente puerto</span>?
                        </h3>
                        <p className="text-lg text-white max-w-md mx-auto mb-8">
                            Llegamos a los puertos más importantes del mundo. Solicite una cotización personalizada y descubra cómo podemos agilizar sus importaciones y exportaciones.
                        </p>
                        <button className="bg-linear-to-b from-[#1E1E1E] to-[#050505] text-white text-sm px-6 py-3 rounded-lg border border-[#242424] inline-flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer group">
                            <div className="relative overflow-hidden">
                                <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                                    Solicitar Cotización
                                </span>
                                <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                                    Solicitar Cotización
                                </span>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction;