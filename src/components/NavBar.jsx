import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import {motion} from 'framer-motion';

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    // Lógica del Modo Oscuro
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const navigation = [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
    ]

    return (
        
        <motion.header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="#" className="text-gray-900 dark:text-white font-bold text-xl tracking-tight">
                        GlobalNex<span className="text-indigo-600 dark:text-indigo-400">Trading</span>
                    </a>
                </div>

                {/* Botón Hamburguesa (Móvil) */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 dark:text-gray-400"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {/* Menú Centrado (Escritorio) */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm/6 font-semibold text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Botón de Modo Oscuro a la Derecha */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:ring-2 ring-indigo-500 transition-all"
                    >
                        {darkMode ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
                    </button>
                </div>
            </nav>

            {/* Menú Lateral (Móvil) */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:max-w-sm transition-colors duration-300">
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
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                {/* Botón Toggle dentro del menú móvil */}
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="mt-4 flex w-full items-center gap-x-3 px-3 py-2 text-base font-semibold text-gray-900 dark:text-white"
                                >
                                    {darkMode ? <SunIcon className="size-6 text-yellow-400" /> : <MoonIcon className="size-6 text-gray-600" />}
                                    {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </motion.header>
    )
}