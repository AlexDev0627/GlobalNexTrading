import { motion } from 'framer-motion';

const Mision = ({
    titlePrefix = "",
    imageSrc = "./pic4.jpg",
    des = "",
    reverse = false,
    marginTop = "",
    badge = "Compromiso Global",
    partnerLogos = ["./MaerskWhite.png", "./Hapag.png", "./One.png", "./Cma.png"]
}) => {

    return (
        <section className={`relative overflow-hidden bg-transparent py-24 md:py-32 ${marginTop}`}>
            {/* Decoraciones de fondo sutiles */}
            <div className={`absolute top-1/4 ${reverse ? 'right-0' : 'left-0'} w-72 h-72 bg-lime-500/5 rounded-full blur-3xl pointer-events-none`} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Contenedor de imagen con diseño premium */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`relative group ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
                    >
                        {/* Elemento decorativo detrás de la imagen */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`absolute -inset-4 bg-lime-500/10 rounded-[2rem] transform ${reverse ? '-rotate-2' : 'rotate-2'}`}
                        />

                        <div className="relative z-10 rounded-[1.5rem] overflow-hidden shadow-2xl border border-gray-200/50 dark:border-white/10 aspect-[4/3] lg:aspect-square">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                alt="Misión Global Nex Trading"
                                src={imageSrc}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Pequeño detalle flotante decorativo */}
                        <div className={`absolute -bottom-6 ${reverse ? '-right-6' : '-left-6'} w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-black z-20`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Contenedor de Texto */}
                    <div className={`relative z-10 ${reverse ? 'lg:order-1 lg:text-right' : 'lg:order-2 lg:text-left'}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-lime-600 dark:text-lime-400 uppercase bg-lime-50 dark:bg-lime-900/20 rounded-lg">
                                {badge}
                            </span>

                            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-8 leading-tight">
                                {titlePrefix}
                            </h2>

                            <div className={`h-1 w-20 bg-lime-500 mb-8 ${reverse ? 'ml-auto' : ''}`} />

                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                                {des}
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className={`mt-10 flex gap-4 ${reverse ? 'flex-row-reverse' : ''}`}
                            >
                                <div className="flex -space-x-3">
                                    {partnerLogos.map((logo, i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-black bg-white flex items-center justify-center overflow-hidden shadow-sm">
                                            <img src={logo} alt={`Partner ${i}`} className="w-full h-full object-contain p-1" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500 flex items-center">
                                    Aliados internacionales confían en nosotros
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Separador de sección integrado */}
            <div className="mt-20 flex items-center px-6 md:px-12">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-gray-300 dark:to-gray-800"></span>
                <span className="shrink-0 px-6 text-xs font-medium tracking-widest text-gray-400 uppercase">
                    Excelencia Operativa
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-gray-300 dark:from-gray-800 via-gray-300 dark:via-gray-800 to-transparent"></span>
            </div>
        </section>
    );
}

export default Mision;
