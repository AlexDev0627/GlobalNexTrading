import Tilt from 'react-parallax-tilt';

const AppPreview = () => {
    return (
        <div className="relative flex items-center justify-center p-10 py-32 overflow-visible mr-[100px] -top-20">
            
            {/* CAPA 1: TARJETA BLANCA (Fondo) */}
            <Tilt
                perspective={1200}
                tiltMaxAngleX={25} 
                tiltMaxAngleY={25}
                scale={1.05}
                transitionSpeed={2000}
                className="relative z-10"
            >
                <img
                    src="/blackcard.png"
                    className="w-72 md:w-80 lg:w-96 h-auto drop-shadow-2xl object-contain mr-5"
                    alt="Tarjeta Blanca GlobalNex"
                />
            </Tilt>

            {/* CAPA 2: TARJETA NEGRA (Adelante) */}
            <Tilt
                perspective={1200}
                tiltMaxAngleX={25} 
                tiltMaxAngleY={25}
                scale={1.05}
                transitionSpeed={2000}
                /* USAMOS overflow-hidden para que el borde gris no se vea.
                   USAMOS rounded para que el contenedor tenga la misma forma que la tarjeta.
                */
                className="absolute z-20 top-[65%] -right-12 md:-right-24 lg:-right-40 transform -translate-y-1/2 rounded-[20px] overflow-hidden"
            >
                <img 
                 src="/whitecard.png" 
                 alt="Tarjeta Negra GlobalNex" 
                 /* IMPORTANTE: 
                    1. Quitamos mt-50 (eso causaba el espacio gris arriba).
                    2. Usamos block para eliminar espacios residuales.
                 */
                 className="w-72 md:w-80 lg:w-96 h-auto drop-shadow-2xl block object-contain" 
               />
            </Tilt>

        </div>
    );
};

export default AppPreview;