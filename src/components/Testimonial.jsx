import { motion } from 'framer-motion';

const Testimonial = () => {
    const cardsData = [
        {
            image: './ricardo.png',
            name: 'Ricardo Méndez',
            role: 'Director de Operaciones',
            content: 'Excelente gestión en el flete marítimo desde China. La carga llegó en el tiempo estipulado y sin contratiempos aduaneros.',
        },
        {
            image: './carlos.png',
            name: 'Carlos Rodríguez',
            role: 'Exportador de Alimentos',
            content: 'Global Next Trading ha sido clave para nuestra expansión. Su logística de cadena de frío es impecable y muy confiable.',
        },
        {
            image: './andres.png',
            name: 'Andrés Salazar',
            role: 'Gerente de Suministros',
            content: 'El servicio puerta a puerta simplificó nuestras importaciones. Una transparencia total en los costos y seguimiento de carga.',
        },
        {
            image: './elena.png',
            name: 'Elena Espinoza',
            role: 'Distribuidora Minorista',
            content: 'La mejor atención personalizada en Venezuela. Entienden perfectamente los retos logísticos actuales y ofrecen soluciones reales.',
        },
        {
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200',
            name: 'Alejandro Vargas',
            role: 'Director de Operaciones - TecnoImport',
            content: 'La gestión aduanera de Global Next Trading es impecable. Redujeron nuestros tiempos de desaduanamiento en un 40% en puerto.',
        },
        {
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
            name: 'Sofía Beltrán',
            role: 'Gerente de Exportaciones - Agrícola del Sur',
            content: 'Confianza absoluta en su cadena de frío. Nuestros productos perecederos llegan a Europa con la frescura garantizada.',
        },
        {
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
            name: 'Marco Ferrero',
            role: 'Supply Chain Manager - InduMaq',
            content: 'Soluciones logísticas puerta a puerta de alto nivel. La transparencia en el tracking de carga pesada es lo que buscábamos.',
        }
    ];

    const CreateCard = ({ card, index }) => (
        <motion.div
            whileHover={{ y: -8 }}
            className="cursor-pointer px-8 py-8 rounded-[2.5rem] mx-4 w-80 shrink-0 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 transition-all duration-500 group hover:border-lime-500/30 hover:shadow-[0_20px_50px_rgba(163,230,53,0.08)]"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                    <img
                        className="size-14 rounded-full object-cover border-2 border-transparent group-hover:border-lime-500 transition-colors duration-500"
                        src={card.image}
                        alt={card.name}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-lime-500 p-1 rounded-full border-2 border-white dark:border-black shadow-lg">
                        <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-900 dark:text-white font-medium tracking-tight">{card.name}</p>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative mb-6">
                <svg className="absolute -top-4 -left-2 w-10 h-10 text-lime-500/10 dark:text-lime-500/5 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.703 15.011 15.688 16.151 15.688L17.16 15.688C17.747 15.688 18.23 15.158 18.23 14.512L18.23 13.048C18.23 12.449 17.743 11.963 17.142 11.963L16.29 11.963C15.054 11.963 14.048 10.957 14.048 9.721L14.048 8.16C14.048 6.924 15.054 5.918 16.29 5.918L18.789 5.918C20.025 5.918 21.031 6.924 21.031 8.16L21.031 13.52C21.031 16.222 18.81 21 16.151 21L14.017 21ZM4 21L4 18C4 16.703 4.994 15.688 6.134 15.688L7.143 15.688C7.73 15.688 8.213 15.158 8.213 14.512L8.213 13.048C8.213 12.449 7.726 11.963 7.125 11.963L6.273 11.963C5.037 11.963 4.031 10.957 4.031 9.721L4.031 8.16C4.031 6.924 5.037 5.918 6.273 5.918L8.772 5.918C10.008 5.918 11.014 6.924 11.014 8.16L11.014 13.52C11.014 16.222 8.793 21 6.134 21L4 21Z" />
                </svg>
                <p className="relative text-base text-slate-600 dark:text-gray-400 font-light leading-relaxed italic">
                    {card.content}
                </p>
            </div>

            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-lime-600 dark:text-lime-400">
                {card.role}
            </span>
        </motion.div>
    );

    return (
        <div className="relative pt-32 pb-40 overflow-hidden bg-transparent">
            {/* Cabecera con diseño coordinado */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-1.5 mb-6"
                >
                    <span className="text-[10px] font-medium tracking-[0.2em] text-lime-600 dark:text-lime-400 uppercase">Testimonios de Éxito</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
                >
                    Voces de <span className="text-lime-500 text-glow">Confianza.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Empresas y directivos que confían en nuestra ingeniería logística para sus operaciones internacionales.
                </motion.p>
            </div>

            <style>{`
                @keyframes marqueeScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                .marquee-container {
                    display: flex;
                    width: max-content; 
                    animation: marqueeScroll 60s linear infinite;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }

                .marquee-row:hover .marquee-container {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Scroll Infinito - Fila 1 */}
            <div className="marquee-row relative w-full overflow-hidden mb-12 transform-gpu">
                <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />

                <div className="marquee-container flex py-8">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} index={index} />
                    ))}
                </div>

                <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
            </div>

            {/* Scroll Infinito - Fila 2 (Reversed) */}
            <div className="marquee-row relative w-full overflow-hidden transform-gpu">
                <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />

                <div className="marquee-container marquee-reverse flex py-8">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={`rev-${index}`} card={card} index={index} />
                    ))}
                </div>

                <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
            </div>

            {/* Decoración de fondo sutil */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lime-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
        </div>
    );
};

export default Testimonial;
