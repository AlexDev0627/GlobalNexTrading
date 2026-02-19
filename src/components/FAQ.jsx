import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Qué servicios de logística ofrecen?",
            answer: "Ofrecemos soluciones integrales que incluyen transporte marítimo, aéreo y terrestre, almacenamiento, gestión de aduanas y servicios de importación/exportación adaptados a las necesidades de su empresa.",
        },
        {
            question: "¿Realizan envíos a nivel internacional desde Venezuela?",
            answer: "Sí, conectamos la producción nacional con mercados internacionales en los cinco continentes, gestionando toda la cadena de suministro para garantizar que su carga llegue de forma segura y eficiente.",
        },
        {
            question: "¿Cómo garantizan la seguridad de la mercancía?",
            answer: "Utilizamos tecnología de rastreo avanzada, trabajamos con aliados internacionales de primer nivel y cumplimos con los más estrictos estándares de seguridad y normativas internacionales de transporte.",
        },
        {
            question: "¿Pueden manejar carga refrigerada o perecederos?",
            answer: "Contamos con equipos especializados de atmósfera controlada y tratamiento en frío para el transporte de alimentos, frutas y productos farmacéuticos, preservando su integridad en todo momento.",
        },
        {
            question: "¿Cómo puedo solicitar una cotización?",
            answer: "Puede solicitar una cotización haciendo click en el botón 'Cotizar' en nuestro NavBar o a través de nuestra sección de contacto. Un asesor comercial se pondrá en contacto con usted en breve.",
        },
    ];

    return (
        <section className="relative py-32 px-4 bg-transparent overflow-hidden">
            {/* Decoraciones de fondo sutiles para coherencia con el sitio */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 opacity-30 dark:opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-1.5 mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-700 dark:text-lime-400">
                            Centro de Ayuda
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6 leading-tight"
                    >
                        Preguntas <span className="text-lime-500">Frecuentes.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-light"
                    >
                        Todo lo que necesita saber sobre nuestras operaciones logísticas internacionales y cómo podemos potenciar el crecimiento de su negocio.
                    </motion.p>
                </div>

                <div className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-3xl border transition-all duration-300 focus-within:ring-2 focus-within:ring-lime-500/50 focus-within:ring-offset-2 dark:focus-within:ring-offset-black ${openIndex === index
                                ? 'bg-white dark:bg-white/5 border-lime-500/50 shadow-[0_10px_30px_rgba(163,230,53,0.1)]'
                                : 'bg-white/50 hover:bg-gray-100 dark:hover:bg-white/5 dark:bg-[#0a0a0a]/50 border-gray-200 dark:border-white/5 hover:border-lime-500/50'
                                }`}
                        >
                            <button
                                className="flex items-center justify-between w-full p-8 text-left outline-none cursor-pointer rounded-3xl"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                <h3 className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-lime-600 dark:text-lime-400' : 'text-gray-900 dark:text-white'
                                    }`}>
                                    {faq.question}
                                </h3>
                                <div className={`p-2 rounded-full transition-all duration-500 ${openIndex === index ? 'bg-lime-500 text-black rotate-180 shadow-lg shadow-lime-500/20' : 'bg-gray-100 dark:bg-white/5 text-gray-500'
                                    }`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 pt-0">
                                            <div className="h-px w-10 bg-lime-500/30 mb-6" />
                                            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;