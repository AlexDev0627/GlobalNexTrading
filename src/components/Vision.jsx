import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <>
        <section className="overflow-hidden bg-transparent sm:grid sm:grid-cols-2 sm:items-center pt-60 pb-30">
            
            {/* 1. IMAGEN A LA IZQUIERDA */}
            <motion.img
                initial={{ opacity: 0, x: -50 }} // Entra desde la izquierda
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                alt="Nuestra Visión" 
                src="CONTAINER.png" // Cambia por tu imagen
                className="h-full w-full object-cover sm:h-[calc(100%-2rem)] rounded-r-3xl shadow-2xl order-last sm:order-first"
            />

            {/* 2. TEXTO A LA DERECHA */}
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center sm:text-left">
                    <motion.h2 
                        initial={{ opacity: 0, x: 50 }} // Entra desde la derecha
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-2xl font-bold md:text-3xl text-slate-800 dark:text-white"
                    >
                        Nuestra Visión
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-slate-800 dark:text-white md:mt-4 block"
                    >
Consolidarnos para el año 2030 como la plataforma logística y comercial líder en la región, siendo reconocidos por nuestra capacidad de adaptación tecnológica, nuestra excelencia operativa y por ser el puente indispensable para el comercio internacional en Venezuela.                    </motion.p>
                </div>
            </div>
            
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

export default Vision;