import React from "react";

const ButterflyIntroReut = ({title, image, children}) => {
    return (
         <>
         {title && (
              <header className="text-center mb-7 mt-8">
                <h1 className=" font-segoe text-mint-green-700 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
                    {title}
                </h1>
              </header>
         )}

              <section className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
                <div className="flex justify-center items-center">
                  <img src={image} alt="Mariposa asiática" className="max-w-[250px] md:max-w-[400px] lg:max-w-[500px] h-auto animate-flotar" />
                </div>
        
                <div className="max-w-2xl order-1 md:order-2">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl text-center md:text-left">
                    <p className="font-segoe text-mint-green-700 text-sm md:text-base leading-relaxed opacity-0 animate-fade-in animation-delay-500">
                      {children}
                    </p>
                  </div>
                </div>
              </section>
            </>


    )


}
export default ButterflyIntroReut;
