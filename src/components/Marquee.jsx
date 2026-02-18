import { motion } from 'framer-motion';

export default function Marquee() {

    const logos = [
        { dark: './MaerskWhite.png', light: './MaerskDark.png', name: 'Maersk' },
        { dark: './One.png', light: './One.png', name: 'ONE' },
        { dark: './Hapag.png', light: './Hapag.png', name: 'Hapag-Lloyd', shouldInvert: true },
        { dark: './Cma.png', light: './Cma.png', name: 'CMA CGM' },
        { dark: './HamburgSued.svg', light: './HamburgSued.svg', name: 'Hamburg Sued' },
    ];

    // Duplicamos la lista para crear el efecto de bucle infinito sin saltos
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="py-24 md:py-32 overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white"
                >
                    Impulsando el Comercio con los <br />
                    <span className="text-lime-500">Líderes Globales</span>
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 w-24 bg-lime-500 mx-auto mt-6 rounded-full"
                />
            </div>

            {/* Contenedor de la Marquee con Máscara de Degradado */}
            <div className="relative w-full overflow-hidden">
                {/* Gradientes laterales para el efecto de "fade" */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

                {/* Animación de desplazamiento */}
                <motion.div
                    className="flex whitespace-nowrap w-max"
                    animate={{
                        x: [0, "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center mx-8 md:mx-12 group"
                        >
                            <div className="relative h-12 md:h-14 w-32 md:w-40 flex items-center justify-center cursor-pointer">
                                {/* Imagen para modo claro */}
                                <motion.img
                                    src={logo.light}
                                    alt={logo.name}
                                    initial={{ filter: "grayscale(100%)", opacity: 0.6 }}
                                    whileHover={{ filter: "grayscale(0%)", opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="max-h-full max-w-full object-contain dark:hidden"
                                />
                                {/* Imagen para modo oscuro */}
                                <motion.img
                                    src={logo.dark}
                                    alt={logo.name}
                                    initial={{ filter: "grayscale(100%) invert(100%)", opacity: 0.5 }}
                                    whileHover={{
                                        filter: logo.shouldInvert ? "grayscale(0%) invert(100%)" : "grayscale(0%) invert(0%)",
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="hidden dark:block max-h-full max-w-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-16 max-w-lg mx-auto px-6">
                <p className="text-sm text-center text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
                    Conexiones multimodales en los principales puertos del mundo
                </p>
            </div>
        </div>
    );
}
