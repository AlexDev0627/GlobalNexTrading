


export default function Marquee() {

    const logos = [
        './MaerskDark.png',
        './MaerskWhite.png',
        './One.png',
        './Hapag.png',
        './Cma.png',
        './HamburgSued.svg',
        './Hapag.jpg'
    ];

    return (
        <>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-600 dark:text-gray-300 text-center my-30">Con la confianza de las empresas <br /><span className="text-lime-400">líderes del mundo</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-16 w-max mx-auto">
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 border-t-0 border-l-0"></div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 border-t-0 border-x-0 md:border-r"></div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 hidden md:flex md:border-t-0 md:border-x-0 lg:border-r"></div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 hidden lg:block lg:border-x-0 lg:border-t-0"></div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 hidden xl:block xl:border-t-0 xl:border-r-0"></div>
                <div className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center justify-center h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 border-y-0 border-x-0 border-r md:hidden lg:flex lg:border-b">
                    <img src={logos[0]}
                        className="block dark:hidden w-50 h-11" />
                    <img src={logos[1]}
                        className="hidden dark:block w-50 h-11" />
                </div>
                <div className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center justify-center h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 border-y-0 border-x-0 md:border-r md:border-b">
                    <img src={logos[2]}
                        className=" w-45 h-12" />
                </div>
                <div className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center justify-center h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 border-x-0 border-r md:border-t-0">
                    <img src={logos[3]}
                        className=" w-45 h-8" />
                </div>
                <div className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center justify-center h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 border-x-0 md:border-t-0">
                    <img src={logos[4]}
                        className=" w-30 h-25" />
                </div>
                <div className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 items-center justify-center h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 hidden xl:flex xl:border-t-0 xl:border-r-0">
                    <img src={logos[5]}
                        className="h-50 w-55"
                    />

                </div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 hidden xl:block xl:border-y-0 xl:border-l-0"></div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 hidden lg:block lg:border-y-0 lg:border-l-0"></div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 hidden md:block md:border-l-0 md:border-y-0"></div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 border-x-0 border-y-0 border-r xl:border-r-0"></div>
                <div className="hover:bg-transparent h-16 w-44 sm:w-60 sm:h-20 border border-slate-200 dark:border-gray-900 border-x-0 border-y-0 xl:border-l"></div>
            </div>
        </>
    );
};