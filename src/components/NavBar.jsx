import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/icons/logo1.png';
import logo2 from '../assets/icons/logo2.png';

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    // Detección de scroll para el efecto de navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const navigation = [
        { name: 'Inicio', href: '/' },
        { name: 'Nosotros', href: '/about' },
        { name: 'Servicios', href: '/services' },
        { name: 'Contacto', href: '/contact' },
    ]

    // Lógica de fondo: Ahora es igual para todas las páginas (Transparente -> Glassmorphism)
    // Se ajustan py-6 y py-4 para dar más "altura" y elegancia
    const navBackground = scrolled
        ? 'bg-white/95 dark:bg-black/90 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-white/10 py-4'
        : 'bg-transparent py-6'

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}
        >
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link
                        to="/"
                        className="flex items-center gap-2 group outline-none"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                            <img src={logo} alt="Logo" className="h-9 w-auto hidden dark:block" />
                            <img src={logo2} alt="Logo" className="h-9 w-auto block dark:hidden" />
                            <span className="text-xl font-medium tracking-tight text-gray-900 dark:text-white hidden sm:block">
                                GlobalNex<span className="text-lime-500">Trading</span>
                            </span>
                        </motion.div>
                    </Link>
                </div>

                {/* Hamburguesa Móvil */}
                <div className="flex lg:hidden gap-4 items-center">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 focus:outline-none"
                    >
                        {darkMode ? <SunIcon className="size-5 text-yellow-500" /> : <MoonIcon className="size-5" />}
                    </button>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors focus:outline-none"
                    >
                        <Bars3Icon aria-hidden="true" className="size-7" />
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="relative text-[11px] font-medium tracking-[0.2em] text-gray-600 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-all uppercase group outline-none"
                        >
                            {item.name}
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-[2px] bg-lime-500"
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={location.pathname === item.href ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                                whileHover={{ scaleX: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
                    <motion.button
                        whileHover={{ rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer p-2.5 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white border border-transparent hover:border-lime-500/50 transition-all focus:outline-none"
                    >
                        {darkMode ? <SunIcon className="size-5 text-yellow-500" /> : <MoonIcon className="size-5" />}
                    </motion.button>

                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer px-6 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-medium text-[10px] uppercase tracking-[0.15em] rounded-2xl transition-all shadow-lg shadow-lime-500/20"
                        >
                            Cotizar
                        </motion.button>
                    </Link>

                </div>
            </nav>

            {/* Mobile Menu - Refactorizado para estabilidad con Headless UI v2 + React 19 */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="relative z-50 lg:hidden"
            >
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 data-[closed]:opacity-0"
                    aria-hidden="true"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-md bg-white dark:bg-[#0a0a0a] shadow-2xl border-l border-gray-200 dark:border-white/5 transform transition duration-500 ease-in-out data-[closed]:translate-x-full"
                            >
                                <div className="flex h-full flex-col overflow-y-auto px-6 py-8">
                                    <div className="flex items-center justify-between mb-12">
                                        <span className="text-2xl font-medium tracking-tight dark:text-white">
                                            GNT<span className="text-lime-500">.</span>
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="p-3 rounded-2xl bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-lime-500 transition-colors focus:outline-none"
                                        >
                                            <XMarkIcon className="size-6" />
                                        </button>
                                    </div>

                                    <nav className="space-y-4">
                                        {navigation.map((item, i) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="group flex flex-col p-5 rounded-[2.5rem] hover:bg-lime-500/10 transition-all border border-transparent hover:border-lime-500/20"
                                            >
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-lime-500">0{i + 1}</span>
                                                <span className={`text-4xl font-medium tracking-tight group-hover:translate-x-2 transition-transform ${location.pathname === item.href ? 'text-lime-500' : 'text-gray-900 dark:text-white'}`}>{item.name}</span>
                                            </Link>
                                        ))}
                                    </nav>

                                    <div className="mt-20 pt-8 border-t border-gray-100 dark:border-white/5">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 px-4">Contactanos Ahora</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <button
                                                className="flex items-center justify-center gap-2 p-5 rounded-3xl bg-lime-500 font-bold text-black text-[10px] uppercase tracking-widest active:scale-95 transition-transform"
                                            >
                                                Llamar
                                            </button>
                                            <button
                                                className="flex items-center justify-center gap-2 p-5 rounded-3xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-[10px] uppercase tracking-widest active:scale-95 transition-transform"
                                            >
                                                Email
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </motion.header>
    )
}