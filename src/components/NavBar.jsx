import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const navigation = [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
    ]

    return (
        <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="#" className="text-white font-bold text-xl tracking-tight">
                        GlobalNex<span className="text-red-500">Trading</span>
                    </a>
                </div>

                {/* Botón Hamburguesa (Móvil) */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
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
                            className="text-sm/6 font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Espaciador a la derecha para mantener el centro perfecto */}
                <div className="hidden lg:flex lg:flex-1"></div>
            </nav>

            {/* Menú Lateral (Móvil) */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-white font-bold text-xl">
                            GlobalNexTrading
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}