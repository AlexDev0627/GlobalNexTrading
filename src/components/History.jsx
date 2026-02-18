import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';

const History = () => {
    return (
        <section className="relative py-24 bg-transparent dark:bg-transparent overflow-hidden">
            {/* Decoración de fondo sutil */}
            {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" /> */}
            {/* <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" /> */}

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Columna de Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-lime-600 dark:text-lime-400 uppercase bg-lime-50 dark:bg-lime-900/20 rounded-full border border-lime-200 dark:border-lime-800">
                            Nuestra Esencia
                        </div>

                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight">
                            Pasión por Venezuela, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-400 dark:from-lime-400 dark:to-lime-200">
                                Visión para el Mundo
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                En <span className="font-semibold text-gray-900 dark:text-white">Global Next Trading</span>, no solo gestionamos logística; construimos puentes. Nuestra historia nace de la convicción de que Venezuela posee un potencial inagotable para conectar con los mercados más exigentes del planeta.
                            </p>
                            <p>
                                Con un <span className="font-semibold text-gray-900 dark:text-white">ADN Global</span>, hemos perfeccionado cada eslabón de la cadena de suministro, desde el almacenamiento estratégico hasta la exportación multimodal. Entendemos que cada contenedor cuenta una historia de esfuerzo y cada entrega es una oportunidad para que su negocio trascienda fronteras.
                            </p>
                            <p>
                                Nuestra excelencia operativa se basa en la transparencia y la innovación tecnológica, asegurando que su carga navegue segura en un mundo sin límites.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-medium text-lime-600 dark:text-lime-400">+10</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Años de Exp.</span>
                            </div>
                            <div className="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden sm:block" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-medium text-lime-600 dark:text-lime-400">100%</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Compromiso</span>
                            </div>
                            <div className="w-px h-12 bg-gray-200 dark:bg-gray-800 hidden sm:block" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-medium text-lime-600 dark:text-lime-400">Global</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Conectividad</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna Visual - Diseño de Collage Premium */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                src="./pic7.jpg"
                                alt="Logística Global"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Elementos decorativos flotantes */}
                        <div className="absolute -bottom-8 -left-8 z-20 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-lime-500 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04L3 9.774c0 5.8 2.307 11.13 6.046 13.066a11.959 11.959 0 005.908 0C18.693 20.904 21 15.574 21 9.774l-1.382-3.79z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-medium">Operaciones</p>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Certificadas ISO</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-lime-400/20 rounded-full blur-xl animate-pulse z-0" />
                    </motion.div>

                </div>
            </div>

            {/* Divisor Visual Sutil */}
            <div className="mt-24 flex items-center px-6 md:px-12 opacity-50">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-gray-300 dark:to-gray-700"></span>
            </div>
        </section>
    );
};

export default History;
