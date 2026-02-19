import { motion } from 'framer-motion';

export default function Features3() {
    const reasons = [
        {
            title: "Alcance Global Sin Límites",
            description: "Nuestra red se extiende por los puertos más vitales del mundo, garantizando que su mercancía llegue a su destino con precisión quirúrgica.",
            icon: (
                <svg className="w-6 h-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Seguridad y Certificación",
            description: "Implementamos los estándares más rigurosos de seguridad y cumplimiento normativo en cada eslabón de la cadena logística.",
            icon: (
                <svg className="w-6 h-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Tecnología en Tiempo Real",
            description: "Sistemas avanzados de rastreo y gestión que le permiten supervisar su carga con total transparencia y control desde cualquier lugar.",
            icon: (
                <svg className="w-6 h-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contenido Izquierdo: Texto y Beneficios */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-1.5 mb-8">
                            <span className="text-[10px] font-medium tracking-[0.2em] text-lime-600 dark:text-lime-400 uppercase">
                                Ventaja Global Nex
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
                            ¿Por qué elegir a <br />
                            <span className="text-lime-500 text-glow">Global Next Trading?</span>
                        </h2>

                        <p className="text-xl text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-12 max-w-xl">
                            No solo movemos carga; diseñamos el camino para que su empresa conquiste nuevos mercados con eficiencia y confianza absoluta.
                        </p>

                        <div className="space-y-8">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-lime-500/50 transition-all duration-300">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-lime-500 transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-gray-400 text-sm font-light leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contenido Derecho: Visual Impactante (Rejilla Asimétrica) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative grid grid-cols-2 gap-4 h-[500px]"
                    >
                        <div className="col-span-1 space-y-4 pt-12">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="h-2/3 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <img src="./pic8.png" className="w-full h-full object-cover" alt="Logistics view" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="h-1/3 rounded-[2rem] bg-lime-500 flex items-center justify-center p-8 text-black"
                            >
                                <div className="text-center">
                                    <span className="block text-4xl font-medium italic">+15</span>
                                    <span className="text-xs font-bold uppercase tracking-widest">Países Conectados</span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-span-1 pt-0 space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="h-1/2 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <img src="./pic7.jpg" className="w-full h-full object-cover" alt="Global Trade" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="h-1/2 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <img src="./pic4.jpg" className="w-full h-full object-cover" alt="Security First" />
                            </motion.div>
                        </div>

                        {/* Decoración flotante */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime-500/10 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}