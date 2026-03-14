import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon, TableCellsIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function Form() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: 'Logística Marítima / Aérea',
        mensaje: ''
    });

    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // REEMPLAZA ESTO CON TU URL DE FORMSPREE
        // Ejemplo: "https://formspree.io/f/xbjojpqr"
        const FORMSPREE_URL = "https://formspree.io/f/mjgaoaky";

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    "Nombre Completo": formData.nombre,
                    "Correo de Contacto": formData.email,
                    "Asunto de Interés": formData.asunto,
                    "Mensaje del Cliente": formData.mensaje,
                    "_subject": `Nueva Consulta: ${formData.asunto} - ${formData.nombre}`,
                    "_replyto": formData.email
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ nombre: '', email: '', asunto: 'Logística Marítima / Aérea', mensaje: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Error en la respuesta de Formspree');
            }
        } catch (error) {
            console.error('Error al enviar:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="relative bg-transparent flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 md:pt-42 pb-100 gap-16 overflow-hidden">

            {/* Decoraciones de fondo Premium */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[140px] opacity-60" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] opacity-40" />

                {/* Dotted Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 dark:opacity-50"></div>
            </div>

            {/* Columna de Texto */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full lg:w-1/2 text-center lg:text-left"
            >
                <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-1.5 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-700 dark:text-lime-400">
                        Atención Inmediata
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white mb-8 leading-tight tracking-tighter">
                    ¿Listo para expandir sus <br />
                    <span className="text-lime-500 font-bold">fronteras comerciales?</span>
                </h2>

                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                    Nuestro equipo de expertos está listo para diseñar la arquitectura logística que su negocio necesita. Solicite una asesoría personalizada hoy mismo.
                </p>
            </motion.div>

            {/* Columna del Formulario con efecto Tilt sutil */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-full lg:w-[540px]"
            >
                <div className="relative group p-[1px] rounded-[2.5rem] bg-gradient-to-br from-gray-200 to-transparent dark:from-lime-500/40 dark:via-blue-500/40 dark:to-transparent">
                    <div className="relative bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-12 shadow-2xl overflow-hidden">
                        {/* Brillo de esquina sutil */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 blur-3xl rounded-full" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 ml-1">Nombre Completo</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 dark:text-gray-300 group-focus-within:text-lime-500 transition-colors">
                                            <UserIcon className="size-5" />
                                        </div>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nombre"
                                            className="w-full bg-gray-100/50 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-2xl pl-12 pr-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500/40 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 ml-1">Correo Electrónico</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 dark:text-gray-300 group-focus-within:text-lime-500 transition-colors">
                                            <EnvelopeIcon className="size-5" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="email@empresa.com"
                                            className="w-full bg-gray-100/50 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-2xl pl-12 pr-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500/40 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 ml-1">Asunto de Interés</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 dark:text-gray-300 group-focus-within:text-lime-500 transition-colors">
                                        <TableCellsIcon className="size-5" />
                                    </div>
                                    <select
                                        name="asunto"
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100/50 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-2xl pl-12 pr-10 py-4 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500/40 transition-all duration-300 cursor-pointer"
                                    >
                                        <option className="bg-white dark:bg-[#0a0a0a]" value="Logística Marítima / Aérea">Logística Marítima / Aérea</option>
                                        <option className="bg-white dark:bg-[#0a0a0a]" value="Importación / Exportación">Importación / Exportación</option>
                                        <option className="bg-white dark:bg-[#0a0a0a]" value="Almacenamiento y Aduanas">Almacenamiento y Aduanas</option>
                                        <option className="bg-white dark:bg-[#0a0a0a]" value="Otro Servicio">Otro Servicio</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 ml-1">Mensaje</label>
                                <div className="relative group">
                                    <div className="absolute top-4 left-4 flex items-start pointer-events-none text-gray-400 dark:text-gray-300 group-focus-within:text-lime-500 transition-colors">
                                        <ChatBubbleBottomCenterTextIcon className="size-5" />
                                    </div>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        placeholder="Cuéntenos sobre su proyecto..."
                                        rows="4"
                                        required
                                        className="w-full bg-gray-100/50 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-2xl pl-12 pr-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500/40 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-8">
                                <p className="text-[10px] leading-relaxed text-gray-400 dark:text-gray-500 max-w-[220px] text-center md:text-left">
                                    Al enviar este formulario, acepta nuestra <a href="#" className="underline text-gray-600 dark:text-gray-300 hover:text-lime-500 transition-colors">Política de Privacidad</a> y de tratamiento comercial.
                                </p>
                                <div className="relative w-full md:w-auto">
                                    <motion.button
                                        whileHover={status === 'idle' ? { scale: 1.02, y: -2 } : {}}
                                        whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                                        disabled={status !== 'idle'}
                                        type="submit"
                                        className={`w-full md:w-auto px-12 py-5 font-bold text-[11px] uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl active:shadow-none cursor-pointer flex items-center justify-center gap-2
                                            ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-lime-500 to-lime-400 hover:from-lime-400 hover:to-lime-500 text-black shadow-lime-500/20'}`}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Enviando...
                                            </>
                                        ) : 'Enviar Consulta'}
                                    </motion.button>

                                    <AnimatePresence>
                                        {status === 'success' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 right-0 mt-4 flex items-center justify-center gap-2 text-lime-500 font-bold text-xs"
                                            >
                                                <CheckCircleIcon className="size-5" />
                                                ¡Mensaje enviado con éxito!
                                            </motion.div>
                                        )}
                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 right-0 mt-4 flex items-center justify-center gap-2 text-red-500 font-bold text-xs"
                                            >
                                                <XCircleIcon className="size-5" />
                                                Error al enviar. Inténtelo de nuevo.
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}