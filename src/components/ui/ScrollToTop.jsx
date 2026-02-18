import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Al cambiar la ruta (pathname), reiniciamos el scroll a la posición (0,0)
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Este componente no renderiza nada visual
};

export default ScrollToTop;
