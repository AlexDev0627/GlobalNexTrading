

export default () => {
    const image = './pic2.jpg'
    const features = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#64ad29ff"
                    className="w-7 h-7 text" // Ahora sí funciona Tailwind
                >
                    <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10.2322 1.05711C9.8417 0.66659 9.20854 0.66659 8.81802 1.05711L1.03984 8.83529C0.649317 9.22581 0.649317 9.85898 1.03984 10.2495L1.74698 10.9566L13.7678 22.9774C14.1583 23.3679 14.7915 23.3679 15.182 22.9774L15.8811 22.2783L15.8891 22.2703L15.8972 22.2622L22.2456 15.9138L22.2531 15.9064L22.2605 15.8989L22.9601 15.1992C23.3507 14.8087 23.3507 14.1756 22.9601 13.785L22.2603 13.0852L22.2531 13.0779L22.2458 13.0707L10.9454 1.77027C10.9434 1.76825 10.9414 1.76623 10.9394 1.76422C10.9373 1.76221 10.9353 1.7602 10.9333 1.7582L10.2322 1.05711ZM8.11092 4.59264L4.57539 8.12817L4.57541 8.12818C5.35646 8.90923 5.35646 10.1756 4.57541 10.9566L4.57539 10.9566L8.81804 15.1992L13.0607 19.4419C13.8417 18.6608 15.1081 18.6608 15.8891 19.4419L19.4247 15.9064C18.6436 15.1253 18.6436 13.859 19.4247 13.0779L15.1894 8.84272C16.8413 10.5038 16.4772 13.197 14.8284 14.8457C13.1773 16.4969 10.4785 16.8597 8.81804 15.1992C7.1576 13.5388 7.52042 10.84 9.17159 9.18884C10.8203 7.54013 13.5135 7.17594 15.1746 8.82788L10.9393 4.59266C10.1583 5.3737 8.89198 5.37369 8.11093 4.59265C8.11093 4.59264 8.11093 4.59264 8.11092 4.59264ZM10.5858 10.6031C11.6683 9.52055 13.0851 9.56679 13.7678 10.2495C14.4505 10.9322 14.4967 12.349 13.4142 13.4315C12.3317 14.514 10.915 14.4677 10.2322 13.785C9.54954 13.1023 9.5033 11.6856 10.5858 10.6031Z" />
                </svg>),
            title: "Reducción de Costos Operativos",
            desc: "Optimizamos tus procesos de importación y exportación para eliminar gastos innecesarios. "
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    fill="#64ad29ff"
                    className="w-6 h-6">
                    <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M1 2C1 1.44772 1.44772 1 2 1H3.01472C4.87123 1 6.65171 1.7375 7.96446 3.05025L10.7457 5.83149L17.9212 3.041C19.03 2.60983 20.2887 2.87451 21.1299 3.71569L22.7071 5.29289C22.9283 5.51412 23.0333 5.82613 22.9907 6.13608C22.9481 6.44603 22.7629 6.71819 22.4903 6.87158L15.5633 10.768L17.8955 13.4334L20.1586 13.1101C20.9108 13.0026 21.6698 13.2556 22.2071 13.7929C23.1499 14.7357 23.1499 16.2643 22.2071 17.2071L17.2071 22.2071C16.2643 23.1499 14.7357 23.1499 13.7929 22.2071C13.2556 21.6698 13.0026 20.9108 13.1101 20.1586L13.4334 17.8955L10.768 15.5633L6.87157 22.4903C6.71819 22.7629 6.44603 22.9481 6.13608 22.9907C5.82613 23.0333 5.51412 22.9283 5.29289 22.7071L3.7157 21.1299C2.87451 20.2887 2.60983 19.03 3.041 17.9213L5.83149 10.7457L3.05025 7.96447C1.7375 6.65171 1 4.87123 1 3.01472V2ZM3 3V3.01472C3 4.3408 3.52678 5.61257 4.46447 6.55025L7.70711 9.79289C7.9875 10.0733 8.07573 10.4929 7.932 10.8624L4.90501 18.6461C4.76129 19.0157 4.84951 19.4353 5.12991 19.7157L5.77482 20.3606L9.62843 13.5098C9.77608 13.2473 10.0342 13.0653 10.331 13.0144C10.6279 12.9635 10.9318 13.0491 11.1585 13.2475L15.1585 16.7474C15.4131 16.9702 15.5378 17.3065 15.4899 17.6414L15.0899 20.4414C15.0715 20.5705 15.1149 20.7007 15.2071 20.7929C15.3689 20.9547 15.6311 20.9547 15.7929 20.7929L20.7929 15.7929C20.9547 15.6311 20.9547 15.3689 20.7929 15.2071C20.7007 15.1149 20.5705 15.0715 20.4414 15.0899L17.6414 15.4899C17.3065 15.5378 16.9702 15.4131 16.7474 15.1585L13.2474 11.1585C13.0491 10.9318 12.9635 10.6279 13.0144 10.331C13.0653 10.0342 13.2472 9.77608 13.5097 9.62842L20.3606 5.77481L19.7157 5.12991C19.4353 4.84951 19.0157 4.76129 18.6461 4.90501L10.8624 7.932C10.4929 8.07573 10.0733 7.9875 9.79289 7.70711L6.55025 4.46446C5.61257 3.52678 4.3408 3 3.01472 3H3Z" />
                </svg>,
            title: "Alcance Global Real",
            desc: "Ponemos tu marca frente a ojos internacionales gracias a nuestra red de aliados."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    fill="#64ad29ff"
                    className="w-6 h-6">

                    <path xmlns="http://www.w3.org/2000/svg" d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z" />
                </svg>,
            title: "Seguridad y Confianza",
            desc: "Nos encargamos de la burocracia y los riesgos logísticos para que tú te enfoques en lo que mejor sabes hacer, Vender."
        },
    ]

    return (
        <section className="relative px-10 py-50 overflow-hidden bg-slate-800 shadow-lg ">
            <div className="absolute w-full h-full inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${image})` }}></div>
            <div className="absolute inset-0 z-10 bg-black/60" />
            <div className="relative z-15 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-white dark:text-white text-3xl font-semibold sm:text-4xl">
                        Eleva tu empresa con <span className="text-lime-400 dark:text-lime-400">Global Next Trading</span>
                    </h3>
                    <h4 className="mt-4 text-white dark:text-white text-lg font-medium underline decoration-lime-700">
                        ¿Por qué elegirnos para escalar tu negocio?
                    </h4>
                    <p className="mt-3 text-gray-300">
                        En un mercado globalizado, la diferencia entre una empresa que sobrevive y una que lidera es su capacidad logística. Al elegir a <span className="underline decoration-lime-700">Global Next Trading</span>, tu empresa obtiene
                    </p>
                </div>
                <div className="mt-12 lg:mt-0 ">
                    <ul className="grid gap-8 sm:grid-cols-2 text-white">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4 ">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-white font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </section>
    )
}