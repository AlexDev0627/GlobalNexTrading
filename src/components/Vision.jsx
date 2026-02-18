import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Vision() {
    const productos = [
        {
            title: "Sector Agrícola",
            desc: "Conectamos a productores y agricultores con los mercados globales más exigentes. Garantizamos que sus granos y productos agrícolas lleguen a destino optimizando tiempos de tránsito.",
            img: "./cebada.webp",
        },
        {
            title: "Perecederos",
            desc: "Especialistas en el transporte de frutas y verduras. Utilizamos tecnología de atmósfera controlada y tratamiento en frío para preservar la frescura y proteger su carga sin químicos.",
            img: "./frutas.webp",
        },
        {
            title: "Retail y Consumo",
            desc: "Ofrecemos soluciones de logística 'justo a tiempo' para minoristas. Gestionamos cadenas de suministro flexibles que aseguran la disponibilidad de sus productos en cualquier puerto.",
            img: "./ecomerce.webp",
        },
        {
            title: "Alimentos y Bebidas",
            desc: "Comprendemos la delicadeza del sector alimentario. Contamos con equipos especializados y una programación confiable para el manejo de carga seca y refrigerada.",
            img: "./food.webp",
        },
        {
            title: "Industria Automotriz",
            desc: "Soluciones ágiles y transparentes para el transporte de vehículos y autopartes. Maximizamos la seguridad en el manejo de componentes críticos para la cadena de montaje.",
            img: "./car.webp",
        },
        {
            title: "Farmacéuticos",
            desc: "Transporte seguro de medicamentos y bienes esenciales. Cumplimos con estándares internacionales para garantizar entregas rentables y seguras en centros de salud globales.",
            img: "./farmaceuticos.webp",
        },
        {
            title: "Minería y Minerales",
            desc: "Décadas de éxito conectando la industria extractiva con mercados internacionales. Ofrecemos la robustez necesaria para el transporte de minerales pesados a nivel mundial.",
            img: "./minerales.webp",
        },
        {
            title: "Productos Forestales",
            desc: "Desde madera en troza hasta papel y cartón. Brindamos soluciones versátiles para la exportación de productos madereros y sus derivados con eficiencia logística.",
            img: "./trees.webp",
        }
    ];

    const carruselRef = useRef(null);

    const scroll = (direccion) => {
        if (carruselRef.current) {
            const { scrollLeft, clientWidth } = carruselRef.current;
            const desplazamiento = clientWidth <= 768 ? 320 : 400;

            const nuevaPosicion = direccion === 'izq'
                ? scrollLeft - desplazamiento
                : scrollLeft + desplazamiento;

            carruselRef.current.scrollTo({
                left: nuevaPosicion,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative py-32 px-4 bg-transparent overflow-hidden">
            {/* Decoración de fondo sutil */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 opacity-30 dark:opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center mb-20 text-center">
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
                            Experticia Sectorial
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-8 leading-tight"
                    >
                        Soluciones para cada <br />
                        <span className="text-lime-500">Sector Industrial.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl font-light leading-relaxed"
                    >
                        En Global Nex Trading, diseñamos arquitecturas logísticas a medida. Analizamos la naturaleza de su carga para implementar rutas eficientes y gestión multimodal que garantizan la integridad de la mercancía.
                    </motion.p>
                </div>

                <div className="relative overflow-visible">
                    <div
                        ref={carruselRef}
                        className="flex overflow-x-hidden gap-8 scroll-smooth snap-x snap-mandatory pt-10 pb-12 px-4"
                    >
                        {productos.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -15 }}
                                className="min-w-[300px] md:min-w-[420px] snap-center group cursor-pointer"
                            >
                                <div className="relative h-[500px] overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 transition-all duration-700 ease-out group-hover:border-lime-500/30 group-hover:shadow-[0_20px_50px_rgba(163,230,53,0.12)]">
                                    {/* Imagen con zoom al hover */}
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                            src={item.img || "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&q=80"}
                                            alt={item.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                                    </div>

                                    {/* Contenido */}
                                    <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end transform transition-all duration-700 ease-out">
                                        <div className="mb-4">
                                            <p className="text-[10px] font-medium text-lime-400 uppercase tracking-[0.3em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Servicio Especializado</p>
                                            <h3 className="text-3xl font-medium text-white tracking-tighter leading-none mb-6 transform transition-transform duration-700 group-hover:-translate-y-2">{item.title}</h3>
                                            <p className="text-base text-gray-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 line-clamp-4 transform translate-y-4 group-hover:translate-y-0">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Botón flotante sutil */}
                                        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform translate-y-4 group-hover:translate-y-0 text-lime-500">
                                            <div className="p-3 rounded-full bg-lime-500/10 border border-lime-500/20">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-12 px-4">
                    <div className="flex gap-1">
                        <div className="h-1 w-12 bg-lime-500 rounded-full" />
                        <div className="h-1 w-2 bg-gray-300 dark:bg-white/10 rounded-full" />
                        <div className="h-1 w-2 bg-gray-300 dark:bg-white/10 rounded-full" />
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scroll('izq')}
                            className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-lime-500/50 transition-all shadow-xl shadow-black/5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scroll('der')}
                            className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-lime-500/50 transition-all shadow-xl shadow-black/5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </motion.button>
                    </div>
                </div>

            </div>
        </section>
    );
}
