import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
import logo from '../assets/icons/logo1.png';
import logo2 from '../assets/icons/logo2.png';


export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    // 1. Inicialización inteligente: Lee localStorage o la preferencia del sistema
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            // Si no hay nada guardado, detecta la configuración de Windows/Mac
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    // 2. Efecto para aplicar cambios en el DOM y guardar en memoria
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
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
    ]

    return (
        <motion.header 
            initial={{ opacity: 0, y: -50 }}    
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.8, ease: "easeOut", delay:0.5}}
            className="fixed top-0 w-full z-50  dark:bg-transparent backdrop-blur-sm border-b border-white/10 dark:border-white/10 transition-colors duration-200
"
        >
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                <div className="flex lg:flex-1">
                    <img src={logo} alt="GlobalNexTrading Logo" className="h-8 w-auto cursor-pointer  hidden dark:block transition-colors duration-900" />
                    <img src={logo2} alt="GlobalNexTrading Logo" className="h-8 w-auto cursor-pointer block dark:hidden transition-colors duration-900" />

                </div>

                {/* Botón Hamburguesa*/}
                <motion.div className="flex lg:hidden"
                initial={{opacity:0, x:-20}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.5, delay:0.8, ease:"easeOut"}}>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 dark:text-gray-400"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </motion.div>

                {/* Menú Centrado (Escritorio) */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            className="relative block text-sm/6 font-semibold text-white dark:text-white hover:text-lime-300 dark:hover:text-lime-300 transition-colors duration-300 "
                        >
                            {item.name}
                            <motion.span 
                            className="absolute w-full -bottom-1 left-0 h-[2px] bg-slate-900  dark:bg-lime-400"
                            variants={{
                                rest:{scaleX:0},
                                hover:{scaleX:1}

                            }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                            style={{ originX: 0.5 }} // Hace que crezca desde el centro
        />
                        </motion.a>
                    ))}
                </div>

                {/* Botón de Modo Oscuro a la Derecha */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:ring-2 ring-lime-300 transition-all focus:outline-none"
                    >
                        {darkMode ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
                    </button>
                </div>
            </nav>

            {/* Menú Lateral (Móvil) */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:max-w-sm transition-colors duration-300 border-l border-gray-200 dark:border-white/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-gray-900 dark:text-white font-bold text-xl">
                            GlobalNexTrading
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-500 dark:text-gray-400"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-200 dark:divide-white/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                
                                <hr className="border-gray-200 dark:border-white/10 my-4" />

                                {/* Botón Toggle dentro del menú móvil */}
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="flex w-full items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    {darkMode ? (
                                        <>
                                            <SunIcon className="size-6 text-yellow-400" />
                                            <span>Modo Claro</span>
                                        </>
                                    ) : (
                                        <>
                                            <MoonIcon className="size-6 text-gray-600" />
                                            <span>Modo Oscuro</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </motion.header>
    )
}