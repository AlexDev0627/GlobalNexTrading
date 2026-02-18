import { motion } from 'framer-motion';
import {
    ShieldCheckIcon,
    LightBulbIcon,
    GlobeAltIcon,
    ArrowPathRoundedSquareIcon
} from '@heroicons/react/24/outline';

const values = [
    {
        name: 'Seguridad Integral',
        description: 'Garantizamos la integridad de su carga mediante protocolos de seguridad rigurosos y monitoreo constante en toda la cadena de suministro.',
        icon: ShieldCheckIcon,
        color: 'from-lime-500 to-lime-600'
    },
    {
        name: 'Conectividad Global',
        description: 'Nuestra red de aliados internacionales nos permite llegar a cualquier puerto, transformando distancias en oportunidades comerciales reales.',
        icon: GlobeAltIcon,
        color: 'from-lime-400 to-lime-500'
    },
    {
        name: 'Innovación Logística',
        description: 'Implementamos tecnología de vanguardia para optimizar tiempos de tránsito y ofrecer soluciones adaptadas a la naturaleza de su mercancía.',
        icon: LightBulbIcon,
        color: 'from-lime-300 to-lime-400'
    },
    {
        name: 'Transparencia Operativa',
        description: 'Creemos en relaciones de confianza basadas en una comunicación clara y procesos honestos en cada etapa de la exportación e importación.',
        icon: ArrowPathRoundedSquareIcon,
        color: 'from-lime-600 to-lime-700'
    },
];

const Values = () => {
    return (
        <section className="py-24 bg-transparent dark:bg-transparent transition-colors duration-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4"
                    >
                        Valores que Impulsan nuestro <span className="text-lime-500">Éxito</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        Nuestra cultura corporativa se cimenta en principios sólidos que garantizan la excelencia operativa y el crecimiento mutuo con nuestros aliados.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-black p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-lime-500/50 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} p-3 mb-6 shadow-lg shadow-lime-500/20 group-hover:scale-110 transition-transform duration-300`}>
                                <value.icon className="text-white w-full h-full" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                                {value.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
