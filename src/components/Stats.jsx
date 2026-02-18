import { motion } from 'framer-motion';

export default () => {
    const stats = [
        {
            data: "35K",
            title: "Clientes Activos"
        },
        {
            data: "40+",
            title: "Países Conectados"
        },
        {
            data: "30M+",
            title: "Entregas Exitosas"
        },
    ]

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Cabecera coordinada */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-1.5 mb-6"
                    >
                        <span className="text-[10px] font-medium tracking-[0.2em] text-lime-600 dark:text-lime-400 uppercase">Hitos de Global Nex</span>
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
                    >
                        Confianza que <br className="md:hidden" />
                        <span className="text-lime-500 text-glow">Mueve el Mundo.</span>
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Más que mover carga, movemos tu negocio hacia el éxito global con seguridad, transparencia y puntualidad en cada ruta.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center">
                    {stats.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                            className="relative group flex flex-col items-center"
                        >
                            {/* Decoración de fondo para el número */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-lime-500/5 blur-2xl rounded-full group-hover:bg-lime-500/10 transition-colors duration-500" />

                            <h4 className="relative text-6xl md:text-7xl font-medium text-lime-500 dark:text-lime-400 mb-2 tracking-tighter">
                                {item.data}
                            </h4>

                            <p className="text-lg text-gray-900 dark:text-white font-medium uppercase tracking-widest text-center">
                                {item.title}
                            </p>

                            {/* Línea decorativa inferior */}
                            <div className="w-12 h-1 bg-lime-500/20 rounded-full mt-4 group-hover:w-20 group-hover:bg-lime-500 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decoraciones de fondo sutiles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lime-500/[0.02] blur-[120px] rounded-full pointer-events-none z-0" />
        </section>
    );
};
