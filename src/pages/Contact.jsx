import Form from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';
const Contact =()=>{
    return(
        <div className="relative min-h-screen w-full bg-white dark:bg-black transition-colors duration-700 overflow-x-hidden">


            {/* CAPA MODO OSCURO - Usamos 'fixed' para que te siga en el scroll */}
            <div
                className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-in-out opacity-0 dark:opacity-100"
                style={{
                    background: `
       radial-gradient(
         circle at top,
         rgba(255, 255, 255, 0.08) 0%,
         rgba(255, 255, 255, 0.08) 20%,
         rgba(0, 0, 0, 0.0) 60%
       )
     `}}
            />

        

            <div className="relative z-10 pt-10">
                <h1 className="text-4xl font-bold text-center mt-20 text-lime-400 dark:text-gray-200">Contacto</h1>
                <p className="text-center mt-4 text-gray-600 dark:text-gray-400">Ofrecemos una amplia gama de servicios para satisfacer tus necesidades financieras.</p>

                <Form />
                <Footer />

            </div>
       </div>
   );
}

export default Contact;