import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
    const image = 'pic6.jpg';

    return (
        <section className="relative pt-32 pb-35 px-6 overflow-hidden bg-black">
            {/* Fondo con imagen y overlay premium */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt="CTA Background"
                    className="w-full h-full object-cover opacity-60 bg-fixed"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-8 text-[11px] font-medium tracking-[0.3em] text-lime-400 uppercase bg-lime-500/10 border border-lime-500/20 rounded-full">
                        Tu carga en las mejores manos
                    </span>

                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 leading-tight tracking-tighter">
                        ¿Listo para mover tu carga al <br />
                        <span className="text-lime-500 text-glow">siguiente puerto?</span>
                    </h2>

                    <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                        Llegamos a los puertos más importantes del mundo con seguridad y eficiencia.
                        Solicita ahora una cotización personalizada y optimiza tu logística global.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Link
                            to="/contact"
                            className="bg-lime-500 hover:bg-lime-400 text-black px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(163,230,53,0.3)] transition-all flex items-center gap-3"
                        >
                            Solicitar Cotización
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Efectos de luz decorativos */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-lime-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-500/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
}

export default CallToAction;