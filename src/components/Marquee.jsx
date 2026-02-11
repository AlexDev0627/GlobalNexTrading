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

            <div className="overflow-hidden w-full relative bg-transparent dark:bg-transparent py-30 transition-colors duration-300">
                

                <div className="marquee-inner will-change-transform">
                    {/* Renderizamos los logos dos veces para que no haya saltos */}
                    {[...companyLogos, ...companyLogos].map((company, index) => (
                        <div key={index} className="flex items-center justify-center mx-12">
                            <img 
                                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                                alt={company} 
                                className="h-10 w-auto transition-all duration-300" 
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