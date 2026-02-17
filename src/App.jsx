import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
// Importa tus nuevas páginas aquí, por ejemplo:
// import Contacto from './pages/Contacto'; 

function App() {
    return (
        <Router>
            <div className="relative min-h-screen w-full ">

                {/* Fondo de modo oscuro fijo */}
                <div className="fixed inset-0 z-0 pointer-events-none "

                />

                <div className="relative z-10 flex flex-col min-h-screen">
                    <NavBar />

                    {/* El contenido cambia aquí adentro según la URL */}
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>

                    {/* <Footer /> */}
                </div>
            </div>
        </Router>
    );
}

export default App;