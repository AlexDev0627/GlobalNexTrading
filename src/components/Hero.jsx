import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import ShinyText from './ui/ShinyText';
import GradientText from './ui/GradientText';
import AppPreview from './ui/AppPreview';

const images = [
    './pic1.jpg',
    './pic2.jpg',
    './pic4.jpg',
];

function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 20000); // Cambia cada 20 segundos
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="relative min-h-screen w-full overflow- bg-transparent dark:bg-transparent transition-colors duration-300 shadow-lg">
            {/* CAPA DE IMAGEN DE FONDO Única con opacidad */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index} // La key es vital para que Framer Motion sepa que cambió la imagen
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }} // Duración del fundido
                    className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${images[index]})` }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 z-1 bg-black/70 dark:bg-black/70 pointer-events-none" />

            {/* 4. CONTENIDO: Todo esto va en z-10 para estar ARRIBA de la imagen */}
            <main className="relative z-10 flex h-screen flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between pt-40 px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-col items-center md:items-start">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                        className="text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl text-white dark:text-white"
                    >
                        <GradientText
                            colors={['#deff01', '#f1ff8a', '#96ce00']}
                            animationSpeed={8}
                            showBorder={false}
                        >
                            Global Next Trading
                        </GradientText>
                        El socio estratégico para un mundo sin fronteras
                        <br />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
                        className="text-center md:text-left text-white dark:text-white max-w-lg mt-4 text-base"
                    >
                        Somos una empresa venezolana con ADN global. Nos especializamos en la comercialización, distribución, almacenamiento, importación y exportación de una amplia gama de productos, conectando la producción nacional con mercados internacionales y viceversa.
                    </motion.p>
                    <div class="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-5">
                        <p class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check size-5 text-lime-400"><path d="M20 6 9 17l-5-5" /></svg>
                            <span className="text-slate-400">No credit card</span>
                        </p>
                        <p class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check size-5 text-lime-400"><path d="M20 6 9 17l-5-5" /></svg>
                            <span className="text-slate-400">30 days free trial</span>
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="flex items-center gap-4 mt-8 text-sm"
                    >
                        {/* <Button /> */}
                        {/* <ShinyText text="✨ Shiny Text Effect" speed={2} /> */}
                    </motion.div>
                </div>

                {/* LADO DERECHO: APP PREVIEW */}
                <div className="relative z-10 w-full md:w-auto flex justify-center">
                    <motion.div
                        className="-translate-x-0 md:-translate-x-10 lg:-translate-x-20"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 1.9, ease: "easeOut" }}
                    >
                        {/* <AppPreview /> */}
                    </motion.div>
                </div>
            </main>
            <section className="relative z-10 bg-white shadow-2xl"></section>
        </div>
    );
}

export default Hero;