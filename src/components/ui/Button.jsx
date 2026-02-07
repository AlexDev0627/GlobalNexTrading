import {motion} from 'framer-motion';
export default function Button() {
    return (
        <>
            <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(1turn);
                    }
                }
            
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#FFF);
                    animation: rotate 4s linear infinite;
                }
            `}</style>
            <motion.div 
            initial={{opacity:0, x:-50}}
            animate={{opacity:1, x:0, ease:"linear"}}
            transition={{duration:0.9, delay:1.5}}
            className="rainbow relative z-0 bg-transparent overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 w-fit">
                <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-slate-900 dark:bg-gray-900/80 backdrop-blur">
                    Servicios
                </button>
            </motion.div>
        </>
    );
};  