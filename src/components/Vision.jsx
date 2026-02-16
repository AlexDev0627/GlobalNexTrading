import { useRef } from 'react';

export default function Vision() {
    const productos = [
        {
            title: "Partes de automóviles",
            desc: "Soluciones rápidas, flexibles y transparentes para la cadena de suministro automotriz.",
            img: "./cebada.webp",
        },
        {
            title: "Partes de automóviles",
            desc: "Soluciones rápidas, flexibles y transparentes para la cadena de suministro automotriz.",
            img: "./frutas.webp",
        },
        {
            title: "Partes de automóviles",
            desc: "Soluciones rápidas, flexibles y transparentes para la cadena de suministro automotriz.",
            img: "./ecomerce.webp",
        },
        {
            title: "Partes de automóviles",
            desc: "Soluciones rápidas, flexibles y transparentes para la cadena de suministro automotriz.",
            img: "./farmaceuticos.webp",
        },
        {
            title: "Partes de automóviles",
            desc: "Soluciones rápidas, flexibles y transparentes para la cadena de suministro automotriz.",
            img: "./car.webp",
        },
        {
            title: "Partes de automóviles",
            desc: "Soluciones rápidas, flexibles y transparentes para la cadena de suministro automotriz.",
            img: "./food.webp",
        },
        {
            title: "Partes de automóviles",
            desc: "Soluciones rápidas, flexibles y transparentes para la cadena de suministro automotriz.",
            img: "./minerales.webp",
        },
        {
            title: "Partes de automóviles",
            desc: "Soluciones rápidas, flexibles y transparentes para la cadena de suministro automotriz.",
            img: "./trees.webp",
        }


    ];



    //  Creamos la "etiqueta" para el contenedor
    const carruselRef = useRef(null);

    //  Función para mover el carrusel
    const scroll = (direccion) => {
        if (carruselRef.current) {
            const { scrollLeft, clientWidth } = carruselRef.current;

            // Calculamos cuánto mover (el ancho de una tarjeta + el espacio/gap)
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
        <section className="bg-slate-50 py-20 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-medium text-slate-600 dark:text-gray-300 text-center ">Satisfacemos tus <br></br>necesidades de transporte <br></br>marítimo</h1>
                    <p className="text-slate-600 dark:text-gray-300 mt-2 text-center max-w-2xl mx-auto pt-5">En GlobalNexTrading, nos consolidamos como su socio estratégico integral, ofreciendo soluciones de logística y comercio internacional diseñadas a medida para impulsar el crecimiento específico de su negocio. Gracias a nuestra red global, versatilidad multimodal y una gestión eficiente de recursos, garantizamos un servicio profesional y confiable que asegura el movimiento seguro y oportuno de sus mercancías en cualquier parte del mundo.</p>
                </div>

                <div
                    ref={carruselRef}
                    className="flex overflow-x-hidden gap-6 scroll-smooth snap-x snap-mandatory pb-8"
                >
                    {productos.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[380px] snap-center hover:shadow-lg transition-shadow duration-300 ease-in-out "
                        >
                            <div className="group dark:bg-gray-900 dark:border-lime-900 rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.img || "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&q=80"}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-gray-300 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-gray-300 line-clamp-3">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Botones de Navegación (Paginación) */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={() => scroll('izq')}
                        className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-indigo-600 hover:text-white transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('der')}
                        className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-indigo-600 hover:text-white transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}