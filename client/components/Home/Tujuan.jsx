import React from "react";

const Tujuan = () => {
   return (
      <section className="bg-white">
         <div className="container mx-auto py-16 text-font-black md:py-28">
            <div className="flex flex-col items-center ">
               <h1 className="relative z-10 mx-auto w-fit font-logo text-lg font-bold after:absolute after:bottom-1 after:left-0 after:-z-10 after:h-2 after:w-full after:bg-primary/20 after:content-['']">
                  Tujuan HIMATIF
               </h1>
               <span className="mt-4 max-w-4xl text-center text-lg text-font-gray">
                  Our CyberNews Investigation team uses white hacking techniques
                  to find and safely cybersecurity threats & vulnerabilities.
               </span>
            </div>
            <div className="mt-[104px] flex justify-between">
               <div className="h-60 w-60 rounded-lg shadow-lg"></div>
               <div className="h-60 w-60 rounded-lg shadow-lg"></div>
               <div className="h-60 w-60 rounded-lg shadow-lg"></div>
               <div className="h-60 w-60 rounded-lg shadow-lg"></div>
            </div>
         </div>
      </section>
   );
};

export default Tujuan;
