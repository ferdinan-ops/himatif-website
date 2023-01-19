import Image from "next/image";
import React from "react";
import { Banner } from "../../assets";

const Hero = () => {
   return (
      <section className="relative min-h-screen bg-black font-sans">
         <div className="absolute z-0 flex h-full w-full bg-[#343A40]">
            <div className="relative h-full w-full">
               <Image src={Banner} alt="" fill="fill" className="object-cover brightness-50" />
            </div>
         </div>
         <div className="container relative mx-auto flex min-h-screen w-full px-4 pt-20 pb-[56px] md:px-6 md:pb-[70px] xl:px-0">
            <div className="mt-auto flex flex-col gap-2 text-white md:gap-4">
               <button className="w-fit rounded-lg bg-white/25 px-2 py-1 font-logo text-[10px] font-medium uppercase hover:bg-white/40 md:px-4 md:py-2 md:text-xs md:font-semibold">
                  pertemuan
               </button>
               <h1 className="max-w-[530px] text-2xl font-bold leading-[38px] md:text-4xl md:leading-[48px]">
                  Rapat Progress Kerja dari setiap divisi
               </h1>
               <div className="flex flex-col items-start gap-3 text-xs text-white/80 md:flex-row md:text-sm">
                  <div className="flex items-center gap-3">
                     <div className="h-[2px] w-16 bg-white/80 md:hidden"></div>
                     <span>08.08.2021</span>
                     <div className="h-[2px] w-16 bg-white/80"></div>
                  </div>
                  <div className="flex flex-col gap-4">
                     <p className="max-w-[420px]">
                        Progressively incentivize cooperative systems through
                        technically sound functionalities. The credibly
                        productivate seamless data.
                     </p>
                     <button className="relative w-fit pb-3 font-semibold after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[52%] after:bg-white after:transition-all after:content-[''] hover:after:w-full">
                        Baca Selengkapnya
                     </button>
                  </div>
               </div>
               <div className="mx-auto flex gap-3 pt-14 md:mx-0 md:pt-16">
                  <span className="h-2 w-2 cursor-pointer rounded-full bg-white"></span>
                  <span className="h-2 w-2 cursor-pointer rounded-full bg-white/30"></span>
                  <span className="h-2 w-2 cursor-pointer rounded-full bg-white/30"></span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
