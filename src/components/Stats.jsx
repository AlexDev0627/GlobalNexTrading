export default () => {

    const stats = [
        {
            data: "35K",
            title: "Clientes"
        },
        {
            data: "40+",
            title: "Paises"
        },
        {
            data: "30M+",
            title: "Entregas"
        },
    ]

    return (
        <section className="py-40 dark:bg-transparent">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-slate-800 dark:text-gray-300 text-3xl font-semibold sm:text-4xl mb-4">
                        Confianza avalada por <br></br><span className="text-lime-500">nuestros clientes</span>
                    </h3>
                    <p className="text-center text-lg text-slate-600 dark:text-slate-400 max-w-xs md:max-w-lg flex m-auto">
                        Más que mover carga, movemos tu negocio hacia el éxito global con seguridad, transparencia y puntualidad en cada ruta marítima.</p>
                </div>
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-black"></div>

                <div className="mt-12">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="w-full text-center px-12 py-4 rounded-lg sm:w-auto cursor-pointer bg-dark-200 dark:transparent border border-slate-200 dark:border-slate-900 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                    <h4 className="text-4xl text-slate-800 dark:text-lime-400  font-semibold ">{item.data}</h4>
                                    <p className="mt-3 text-slate-800 dark:text-white font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}