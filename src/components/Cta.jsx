export default () => {
    const servicesData = [
        {
            // Icono: Barco de carga
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M19.38 20L21 7l-9-4-9 4 1.62 13" /><path d="M12 3v17" /><path d="M12 7h7" /><path d="M5 7h7" /></svg>,
            title: "Flete Marítimo Internacional",
            description: "Conexiones globales con las principales navieras para transporte de contenedores completos (FCL)."
        },
        {
            // Icono: Caja/Paquete (Consolidado)
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>,
            title: "Carga Consolidada (LCL)",
            description: "Optimiza costos enviando volúmenes menores compartiendo espacio en contenedor de forma segura."
        },
        {
            // Icono: Ancla (Gestión Aduanera)
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><path d="M12 8v10" /><path d="M12 18H7a3 3 0 0 1-3-3" /><path d="M12 18h5a3 3 0 0 0 3-3" /><path d="M6 13H2" /><path d="M22 13h-4" /></svg>,
            title: "Agenciamiento Aduanal",
            description: "Gestión experta en trámites de nacionalización y despacho para evitar demoras en puerto."
        },
        {
            // Icono: Escudo (Seguro)
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
            title: "Seguro de Mercancía",
            description: "Cobertura integral contra riesgos marítimos, garantizando la protección de tu capital."
        },
        {
            // Icono: Globo (Rutas)
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
            title: "Logística Multimodal",
            description: "Planificación de rutas puerta a puerta combinando transporte terrestre y marítimo."
        },
        {
            // Icono: Portapapeles (Asesoría)
            icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>,
            title: "Asesoría en Comercio Exterior",
            description: "Consultoría técnica sobre normativas Incoterms y optimización de costos logísticos."
        }
    ];

    return (
        <section className="py-24 px-6 bg-white dark:bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Cabecera */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="mb-4 px-4 py-1.5 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-widest">
                        Expertos en Logística
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white mb-4">
                        Servicios de <span className="text-lime-500">Carga Marítima</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                        Soluciones integrales de transporte internacional diseñadas para llevar tu mercancía con seguridad y eficiencia a cualquier puerto del mundo.
                    </p>
                </div>

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} 
                             className="group relative bg-slate-50 dark:bg-transparent border border-slate-200 dark:border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-lime-500/5 hover:-translate-y-1 hover:border-lime-500/50">
                            
                            {/* Icon Container */}
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-slate-800 text-lime-600 dark:text-lime-400 mb-6 shadow-sm group-hover:bg-lime-500 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                {service.title}
                            </h3>
                            
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};