import { motion } from 'framer-motion';

export default () => {
    const servicesData = [
        {

            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M19.38 20L21 7l-9-4-9 4 1.62 13" /><path d="M12 3v17" /><path d="M12 7h7" /><path d="M5 7h7" /></svg>,
            title: "Flete Marítimo Internacional",
            description: "Conexiones globales con las principales navieras para transporte de contenedores completos (FCL)."
        },
        {

            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>,
            title: "Carga Consolidada (LCL)",
            description: "Optimiza costos enviando volúmenes menores compartiendo espacio en contenedor de forma segura."
        },
        {

            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><path d="M12 8v10" /><path d="M12 18H7a3 3 0 0 1-3-3" /><path d="M12 18h5a3 3 0 0 0 3-3" /><path d="M6 13H2" /><path d="M22 13h-4" /></svg>,
            title: "Agenciamiento Aduanal",
            description: "Gestión experta en trámites de nacionalización y despacho para evitar demoras en puerto."
        },
        {

            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
            title: "Seguro de Mercancía",
            description: "Cobertura integral contra riesgos marítimos, garantizando la protección de tu capital."
        },
        {

            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
            title: "Logística Multimodal",
            description: "Planificación de rutas puerta a puerta combinando transporte terrestre y marítimo."
        },
        {

            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>,
            title: "Asesoría Comercio Exterior",
            description: "Consultoría técnica sobre normativas Incoterms y optimización de costos logísticos."
        }
    ];



    return (
        <section className="relative py-24 px-6 overflow-hidden bg-transparent">
            <div className="absolute inset-0 z-0 text-gray-900">

                <div className="" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto">

                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cursor-pointer inline-block bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-1.5 mb-6"
                    >
                        <span className="text-[10px] font-medium tracking-[0.2em] text-lime-600 dark:text-lime-400 uppercase">Expertos en Logística Global</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight"
                    >
                        Servicios de <span className="text-lime-500">Carga Marítima.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed"
                    >
                        Soluciones integrales de transporte internacional diseñadas para llevar tu mercancía con seguridad y eficiencia a cualquier puerto del mundo.
                    </motion.p>
                </div>

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 transition-all duration-500 hover:border-lime-500/30 hover:shadow-[0_20px_50px_rgba(163,230,53,0.08)]"
                        >
                            {/* Icon Container */}
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-lime-500/10 text-lime-600 dark:text-lime-500 mb-6 border border-lime-500/20 group-hover:bg-lime-500 group-hover:text-white transition-all duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 tracking-tight">
                                {service.title}
                            </h3>

                            <p className="text-sm text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                                {service.description}
                            </p>

                            {/* Detalle decorativo al hover */}
                            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lime-500/30">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decoraciones de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-lime-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>
    );
};
