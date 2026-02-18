export default function Features3() {
    return (
        <>
            
            <div className="relative mx-full m-auto max-w-5xl px-4 py-50">
                <div className='flex items-center flex-col justify-center text-center'>
                    <button className='bg-neutral-800 text-sm text-lime-400 px-6 py-2.5 rounded-full border border-lime-400/20'>
                        Nuestros pilares clave
                    </button>
                    
                    <h2 className='text-white font-medium text-4xl md:text-[40px] mt-6'>
                        Porque elegir a <span className='text-lime-400'>Global Next Trading?</span>
                    </h2>
                    
                    <p className='text-base text-white/60 max-w-lg mt-2'>
                        Especialistas en la cadena de suministro, conectando la producción con el éxito comercial internacional.
                    </p>
                </div>
                {/* <div className="absolute -z-50 size-[400px] -top-10 -left-20 aspect-square rounded-full bg-indigo-500/30 blur-3xl"></div> */}
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    <div className="md:col-span-2">
                        <img alt="features showcase" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-4.png" /></div>
                    <div className="md:col-span-1">
                        <img alt="features showcase" className="hover:-translate-y-0.5 transition duration-300" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png" />
                        <h3 className="text-[24px]/7.5 text-slate-800 font-medium mt-6">Better design with highest revenue and profits </h3>
                        <p className="text-slate-600 mt-2">PrebuiltUI empowers you to build beautifully and scale effortlessly.</p>
                        <a href="https://prebuiltui.com" className="group flex items-center gap-2 mt-4 text-indigo-600 hover:text-indigo-700 transition">
                            Learn more about the product
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-5 group-hover:translate-x-0.5 transition duration-300" aria-hidden="true">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};