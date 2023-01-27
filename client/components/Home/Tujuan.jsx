import React from "react";
import Image from "next/image";

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
               <div className="max-w-[323px]">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg">
                     <Image
                        src="https://source.unsplash.com/random/900×700/?university"
                        alt=""
                        fill="fill"
                        className="object-cover"
                     />
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                     <h2 className="font-logo text-3xl font-bold text-font-black">
                        Tips on choosing a university
                     </h2>
                     <p className="text-font-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     </p>
                  </div>
               </div>
               <div className="max-w-[323px]">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg">
                     <Image
                        src="https://source.unsplash.com/random/900×700/?university"
                        alt=""
                        fill="fill"
                        className="object-cover"
                     />
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                     <h2 className="font-logo text-3xl font-bold text-font-black">
                        Tips on choosing a university
                     </h2>
                     <p className="text-font-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     </p>
                  </div>
               </div>
               <div className="max-w-[323px]">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg">
                     <Image
                        src="https://source.unsplash.com/random/900×700/?university"
                        alt=""
                        fill="fill"
                        className="object-cover"
                     />
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                     <h2 className="font-logo text-3xl font-bold text-font-black">
                        Tips on choosing a university
                     </h2>
                     <p className="text-font-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="radial-gradient relative h-28 overflow-hidden text-[#060919]">
            <span className="animation-1 absolute w-max font-logo text-5xl font-bold">
               HIMPUNAN MAHASISWA TEKNIK INFORMATIKA{" "}
               <span className="text-red-500">♥️</span> HIMPUNAN MAHASISWA
               TEKNIK INFORMATIKA
            </span>
         </div>
      </section>
   );
};

export default Tujuan;
