import { motion } from 'framer-motion';

const Features2 = () => {
    const features = [
        {
            title: "Optimización de Suministro",
            description: "Maximizamos la eficiencia en la distribución y almacenamiento de sus productos con procesos de ingeniería logística de vanguardia.",
            image: "https://assets.prebuiltui.com/images/components/feature-sections/features-graphs-image.png",
            alt: "Gráficos de optimización",
            hasTrending: true,
            efficiency: "+45%",
            imageClass: "max-w-[220px]"
        },
        {
            title: "Logística Puerta a Puerta",
            description: "Gestión aduanera y transporte multimodal sin costuras para conectar sus operaciones con los mercados más exigentes.",
            image: "./barco.png",
            alt: "Dashboard logístico",
            hasTrending: false,
            imageClass: "scale-110"
        },
        {
            title: "Mercados Internacionales",
            description: "Facilitamos la expansión global conectando su producción con aliados estratégicos en los principales puertos mundiales.",
            image: "./earth2-removebg-preview.png",
            alt: "Red de mercados",
            hasTrending: false,
            imageClass: "max-w-[240px] drop-shadow-[0_0_20px_rgba(163,230,53,0.1)]"
        }
    ]

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header con estilo coordinado */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-1.5 mb-6"
                    >
                        <span className="text-[10px] font-medium tracking-[0.2em] text-lime-600 dark:text-lime-400 uppercase">
                            Nuestros Pilares Operativos
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
                    >
                        Ingeniería que <span className="text-lime-500 text-glow">Elimina Fronteras.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Dominamos cada eslabón de la cadena de suministro para garantizar que su negocio escale a niveles internacionales con total seguridad.
                    </motion.p>
                </div>

                {/* Grid de Tarjetas Premium */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-lime-500/30 hover:shadow-[0_20px_50px_rgba(163,230,53,0.08)]"
                        >
                            {/* Badge de Eficiencia */}
                            {feature.hasTrending && (
                                <div className="absolute top-6 right-6 bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-lime-500">
                                        <path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" />
                                    </svg>
                                    <span className="text-[10px] font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider">
                                        {feature.efficiency} Eficiencia
                                    </span>
                                </div>
                            )}

                            {/* Contendor de Imagen con Efectos */}
                            <div className="h-48 flex items-center justify-center mb-8">
                                <motion.img
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    className={`w-full h-auto object-contain transition-all duration-500 ${feature.imageClass} pointer-events-none group-hover:drop-shadow-[0_20px_40px_rgba(163,230,53,0.15)]`}
                                    src={feature.image}
                                    alt={feature.alt}
                                />
                            </div>

                            {/* Contenido de la Tarjeta */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-medium text-gray-900 dark:text-white group-hover:text-lime-500 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 dark:text-gray-400 font-light leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decoración sutil inferior */}
                            <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-lime-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Efectos de luz ambiente */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-lime-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-lime-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
        </section>
    )
}

export default Features2;