import { Link } from 'react-router-dom';
import logoGlobal from '../assets/icons/globalNextWhite.png';
import logoGlobalBlack from '../assets/icons/globalNextBlack.png';

export default () => {
    const footerNavs = [
        {
            label: "Servicios",
            items: [
                { href: '/services', name: 'Flete Marítimo' },
                { href: '/services', name: 'Carga Consolidada' },
                { href: '/services', name: 'Agenciamiento Aduanal' },
                { href: '/services', name: 'Seguro de Mercancía' },
            ],
        },
        {
            label: "Empresa",
            items: [
                { href: '/about', name: 'Nosotros' },
                { href: '/contact', name: 'Contacto' },
                { href: '/testimonials', name: 'Testimonios' },
            ]
        },
        {
            label: "Legal",
            items: [
                { href: '#', name: 'Términos de Servicio' },
                { href: '#', name: 'Política de Privacidad' },
            ]
        }
    ]

    return (
        <footer className="relative bg-gray-50 dark:bg-black/10 text-gray-600 dark:text-gray-400 pt-12 overflow-hidden transition-colors duration-500">
            {/* Línea superior con gradiente de marca */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                    {/* Sección Logo y Descripción */}
                    <div className="md:col-span-4 lg:col-span-5 space-y-8">
                        <Link to="/">
                            <img
                                className="h-10 w-auto brightness-110 hidden dark:block"
                                src={logoGlobal}
                                alt="Global Next Trading Logo White"
                            />
                            <img
                                className="h-10 w-auto block dark:hidden"
                                src={logoGlobalBlack}
                                alt="Global Next Trading Logo Black"
                            />
                        </Link>
                        <p className="max-w-sm text-base leading-relaxed font-light text-gray-500 dark:text-gray-400 pt-5">
                            Líderes en ingeniería logística internacional. Conectamos tu negocio con los puertos más importantes del mundo con seguridad, transparencia y eficiencia inigualable.
                        </p>

                        {/* Redes Sociales */}
                        <div className="flex items-center gap-5">
                            <a href="#" className="hover:text-lime-500 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="#" className="hover:text-lime-500 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                            <a href="#" className="hover:text-lime-500 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Columnas de Navegación */}
                    <div className="md:col-span-8 lg:col-span-7 flex flex-wrap md:flex-nowrap justify-between gap-8 md:gap-4">
                        {footerNavs.map((section, idx) => (
                            <div key={idx} className="min-w-[140px] space-y-6">
                                <h4 className="text-sm font-medium uppercase tracking-widest text-gray-900 dark:text-white">
                                    {section.label}
                                </h4>
                                <ul className="space-y-4">
                                    {section.items.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                to={link.href}
                                                className="text-gray-500 hover:text-lime-500 transition-colors duration-300 text-sm inline-block group"
                                            >
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-lime-500 group-hover:w-full transition-all duration-300"></span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>

                </div>
                {/* Métodos de Pago */}
                <div className="flex flex-col items-center md:items-end gap-4 pt-20 md:pt-0">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-gray-600">Métodos de Pago</span>
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
                        {[
                            { src: './visa.png', alt: 'Visa', className: 'h-5 md:h-6' },
                            { src: './mastercard.png', alt: 'Mastercard', className: 'h-14 md:h-14' },
                            { src: './paypal.webp', alt: 'Paypal', className: 'h-20 md:h-20' },
                            { src: './zelle.png', alt: 'Zelle', className: 'h-10 md:h-10' },
                            { src: './binance.png', alt: 'Binance', className: 'h-20 md:h-80' }
                        ].map((payment, idx) => (
                            <div key={idx} className="w-10 md:w-14 h-8 flex items-center justify-center">
                                <img
                                    src={payment.src}
                                    alt={payment.alt}
                                    className={`${payment.className} w-auto object-contain cursor-pointer`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Derechos de autor y Créditos */}
            <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="space-y-4">
                    <p className="text-gray-500 text-sm font-light text-center md:text-left">
                        © 2026 Global Nex Trading. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 dark:text-gray-600">
                        <span className="text-[10px] uppercase tracking-widest leading-none font-medium">Designed by</span>
                        <span className="text-gray-900 dark:text-white text-xs font-medium leading-none tracking-tight">SALAS DESIGN</span>
                    </div>
                </div>



            </div>

            {/* Efectos de fondo sutiles */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lime-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-lime-500/[0.02] rounded-full blur-[80px] pointer-events-none"></div>
        </footer>
    )
}