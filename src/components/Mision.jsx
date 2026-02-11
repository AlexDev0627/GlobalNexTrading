import { motion } from 'framer-motion';

const Mision = () => {
    return (
        // Envolvemos todo en un Fragment <> </> para que React no de error
        <>
            <section className="overflow-hidden bg-transparent sm:grid sm:grid-cols-2 sm:items-center pt-40 pb-20">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center sm:text-left">
                        <motion.h2 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-2xl font-bold md:text-3xl text-slate-800 dark:text-white"
                        >
                            ¿Está listo para hacer crecer su negocio?
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-slate-800 dark:text-white md:mt-4 block" // Quité el 'hidden' para que se vea siempre
                        >
                            Facilitar el crecimiento de nuestros aliados comerciales a través de soluciones logísticas integrales y servicios de comercialización de alta calidad, conectando eficientemente a Venezuela con el resto del mundo mediante procesos transparentes, innovadores y seguros.                    
                        </motion.p>
                    </div>
                </div>

                <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Reduje un poco el delay para que sea más fluido
                    alt="Misión Global Nex Trading" 
                    src="pic1.jpg" 
                    className="h-64 w-full object-cover sm:h-[calc(100%-2rem)] rounded-l-3xl shadow-2xl"
                />
            </section>

          <div className="flex items-center px-6 md:px-12 py-10">
    {/* Línea izquierda - Degradado de transparente a gris */}
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-300 dark:from-transparent dark:via-slate-700 dark:to-slate-700"></span>
    
    {/* Título - Con tu color lima */}
    <span className="shrink-0 px-6 text-sm font-semibold tracking-widest text-lime-600 dark:text-lime-400 uppercase">
        Nuestros Pilares
    </span>
    
    {/* Línea derecha - Degradado de gris a transparente */}
    <span className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent dark:from-slate-700 dark:via-slate-700 dark:to-transparent"></span>
</div>
        </>
    );
}

export default Mision;