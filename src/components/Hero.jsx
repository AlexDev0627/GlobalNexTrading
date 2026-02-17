import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from './ui/GradientText';

// Recibimos props para personalizar el contenido
const HeroSection = ({ 
    images = [], 
    titleMargin="",
    titlePrefix = "", 
    gradientText = "", 
    description = "", 
    showIcons = true,
    height = "min-h-screen",
    overlayOpacity = "bg-black/70"
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return; // No animar si hay solo una imagen
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 15000);
        return () => clearInterval(timer);
    }, [images]);

    return (
        <div className={`relative ${height} w-full overflow-hidden transition-colors duration-300 shadow-lg`}>
            {/* CAPA DE IMAGEN DE FONDO */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${images[index]})` }}
                />
            </AnimatePresence>

            <div className={`absolute inset-0 z-1 ${overlayOpacity} pointer-events-none`} />

            <main className="relative z-10 flex h-full min-h-screen flex-col md:flex-row items-center justify-between py-60 px-4 md:px-16 lg:px-32">
                <div className={`flex flex-col items-center md:items-start text-center md:text-left ${titleMargin}`}>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-semibold max-w-2xl text-gray-300 leading-tight">
                            
                        <GradientText
                            colors={['#deff01', '#f1ff8a', '#96ce00']}
                            animationSpeed={8}
                            showBorder={false}
                        >
                            {gradientText} 
                        </GradientText>
                        
                        {titlePrefix}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.6 }}
                        className="text-lg text-gray-200 max-w-4xl  pt-2"
                    >
                        {description}
                    </motion.p>

                    {showIcons && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
                            <IconLabel icon="shield" text="Operaciones Certificadas" />
                            <IconLabel icon="map" text="Logística Puerta a Puerta" />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

// Sub-componente interno para no repetir código de iconos
const IconLabel = ({ icon, text }) => (
    <p className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lime-400">
            {icon === 'shield' ? <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> : <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>}
        </svg>
        <span className="text-slate-200 font-medium text-sm">{text}</span>
    </p>
);

export default HeroSection;