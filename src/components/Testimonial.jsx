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

    const CreateCard = ({ card }) => (
        <div className=" cursor-pointer px-4 pt-4 pb-3 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <div className="flex gap-2">
                <img className="size-11 rounded-full object-cover" src={card.image} alt={card.name} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="dark:text-white font-medium text-sm">{card.name}</p>
                    </div>
                    {/* Estrellas de Puntuación */}
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800 dark:text-gray-400 italic">"{card.content}"</p>
            <span className="text-[10px] uppercase tracking-widest text-slate-800 dark:text-lime-400 font-bold">{card.role}</span>
        </div>
    );

    return (
        <>
            <style>{`
                @keyframes marqueeScroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                .marquee-inner {
                    display: flex;
                    width: max-content; 
                    animation: marqueeScroll 80s linear infinite;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }

                .marquee-row:hover .marquee-inner {
                    // animation-play-state: paused;
                }
            `}</style>


            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative mt-40 mb-20">
                <div className="text-center mb-8">
                        <div className="cursor-pointer inline-block bg-neutral-100 border border-lime-400 rounded-full px-4 py-1 mb-3 dark:bg-neutral-900">
                            <span className="text-xs text-neutral-600 dark:text-neutral-400">Casos de Éxito</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-gray-300 mb-4">
                            ¿Qué dicen sobre <br></br><span className="text-lime-500">Global Next Trading</span>?
                        </h2>
                        <p className="text-center text-lg text-slate-600 dark:text-slate-400 max-w-2xl max-w-md m-auto">
                            Empresas y directivos que confían en nuestra ingeniería logística para sus operaciones internacionales.
                        </p>
                    </div>
                
                {/* Gradientes laterales para suavizar el scroll */}
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-black"></div>
                
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-black"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative pb-20">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-black"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-black"></div>
            </div>
        </>
    )
}
export default Testimonial;