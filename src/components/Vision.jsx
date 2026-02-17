import { useRef } from 'react';

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
        <section className=" py-40 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                     <div className="cursor-pointer inline-block bg-neutral-100 border border-lime-400 rounded-full px-4 py-1 mb-3 dark:bg-neutral-900 mx-auto">
                            <span className="text-xs text-neutral-600 dark:text-neutral-400">Operaciones Globales</span>
                        </div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-gray-300 mb-4 text-center">Satisfacemos tus <br></br>necesidades de<span className="text-lime-500"> transporte <br></br>marítimo</span></h1>
                    <p className="text-center text-lg text-slate-600 dark:text-slate-400 max-w-md sm:max-w-3xl flex m-auto">En Global Next Trading, diseñamos arquitecturas logísticas a medida para cada sector industrial. Analizamos la naturaleza de su carga desde perecederos bajo atmósfera controlada hasta minerales de alto volumen para implementar rutas eficientes, cumplimiento aduanero riguroso y gestión multimodal que garantizan la integridad de la mercancía y la optimización de los tiempos de tránsito a escala global.</p>
                </div>
                {/* Gradiente suave al hacer scroll */}
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-black"></div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-black"></div>
                {/*  */}
                <div
                    ref={carruselRef}
                    className="flex overflow-x-hidden gap-6 scroll-smooth snap-x snap-mandatory pb-8"
                >
                    {productos.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[380px] snap-center hover:shadow-lg transition-shadow duration-300 ease-in-out dark:hover:shadow-xl hover:shadow-lime-500/5 hover:-translate-y-1 hover:border-lime-500/50 "
                        >
                            <div className="group bg-slate-50 dark:bg-transparent rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-lime-500/50 overflow-hidden cursor-pointer">
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
                        className=" cursor-pointer p-3 rounded-full bg-white dark:bg-transparent border border-slate-200 dark:border-gray-800 shadow-sm hover:bg-gray-800 hover:text-white transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 dark:text-lime-600 hover:dark:text-lime-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('der')}
                        className="cursor-pointer p-3 rounded-full bg-white dark:bg-transparent border border-slate-200 dark:border-gray-800 shadow-sm hover:bg-gray-800 hover:text-white transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 dark:text-lime-600 hover:dark:text-lime-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}