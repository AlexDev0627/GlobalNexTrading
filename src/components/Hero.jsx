import { motion } from 'framer-motion';
import Button from './ui/Button';
import ShinyText from './ui/ShinyText';
import GradientText from './ui/GradientText';
import AppPreview from './ui/AppPreview'; // Importamos el componente 3D

function Hero() {
    return (
        <main className="relative flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between pt-40 px-4 md:px-16 lg:px-24 xl:px-32 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            
            {/* LADO IZQUIERDO: TEXTO Y ACCIONES */}
            <div className="flex flex-col items-center md:items-start z-10">
                <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                    className="text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl text-slate-900 dark:text-white"
                >
                    AI-powered 
                    <br />
                    influencer marketing 
                    <GradientText
                        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                        animationSpeed={8}
                        showBorder={false}
                        className="custom-class"
                    >
                        made simple.
                    </GradientText>
                </motion.h1>
      
                <motion.p 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
                    className="text-center md:text-left text-sm text-slate-700 dark:text-gray-400 max-w-lg mt-2"
                >
                    Unlock smarter workflows with AI tools designed to boost productivity, simplify tasks and help you do more with less effort.
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="flex items-center gap-4 mt-8 text-sm"
                >
                    <Button />
                    <ShinyText
                        text="✨ Shiny Text Effect"
                        speed={2}
                        disabled={false}
                    />
                </motion.div>
            </div>

            {/* LADO DERECHO: LA CREDIT CARD + PHONE PARALLAX */}
            <div className="relative z-10 w-full md:w-auto flex justify-center   ">
                <motion.div
                classNme="-translate-x-10 "
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 1.9, ease: "easeOut" }}
                >
                    {/* Reemplazamos el <img> por nuestro componente Parallax */}
                    <AppPreview />
                </motion.div>
            </div>

            {/* DECORACIÓN DE FONDO (El resplandor) */}
            <div 
                className="absolute inset-y-0 right-0 w-full max-w-xl h-full blur-[118px] opacity-50 dark:opacity-30 pointer-events-none" 
                style={{ 
                    background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.4) 10%, rgba(232, 121, 249, 0.3) 34.2%, rgba(192, 132, 252, 0.2) 77.55%)",
                    right: "-10%" 
                }}
            ></div>

        </main>
    );
}

export default Hero;