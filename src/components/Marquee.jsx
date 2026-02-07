const Marquee = () => {
    const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"];

    return (
        <>
            <style>{`
                .marquee-inner {
                    display: flex;
                    width: max-content; 
                    animation: marqueeScroll 40s linear infinite;
                }

                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } /* Mueve la mitad para el efecto infinito */
                }
            `}</style>

            {/* Contenedor principal: ahora con dark mode y padding */}
            <div className="overflow-hidden w-full relative bg-transparent dark:bg-gray-900 py-30 transition-colors duration-300">
                
                {/* Degradados laterales para que los logos "aparezcan" suavemente */}
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />
                <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />

                <div className="marquee-inner will-change-transform">
                    {/* Renderizamos los logos dos veces para que no haya saltos */}
                    {[...companyLogos, ...companyLogos].map((company, index) => (
                        <div key={index} className="flex items-center justify-center mx-12">
                            <img 
                                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                                alt={company} 
                                // Ajustamos el tamaño aquí: h-8 o w-32 en lugar de w-full
                                className="h-8 w-auto transition-all duration-300" 
                                draggable={false} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Marquee;