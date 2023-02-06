import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Logo } from "../../assets";
import { menu, sosialMedia } from "../../utils/data";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
   return (
      <footer className="bg-primary">
         <div className="container mx-auto py-14 md:py-[72px] px-6 xl:px-0">
            <div className="flex flex-col justify-between xl:flex-row">
               <div className="flex max-w-sm md:max-w-md flex-col">
                  <div className="flex items-center gap-4 font-logo font-bold text-white ">
                     <Image src={Logo} alt="" className="h-9 md:h-11 w-fit" />
                     <h2 className="text-2xl md:text-3xl">HIMATIF</h2>
                  </div>
                  <p className="mt-4 text-white/80 md:text-base text-sm">
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor
                     do amet sint. Velit officia consequat duis enim velit
                     mollit.
                  </p>
                  <div className="md:mt-8 flex items-center gap-5 md:gap-8 text-font-black mt-6">
                     {sosialMedia.map((item, index) => (
                        <Link key={index} href={item.href} className="rounded-full bg-white p-1.5 md:p-2 hover:bg-slate-300">
                           {item.icon}
                        </Link>
                     ))}
                  </div>
               </div>
               <div className="mt-8 md:mt-10 flex flex-col justify-between gap-8 md:justify-start xl:justify-between md:flex-row md:gap-16 xl:mt-0">
                  <div className="flex min-w-[280px] flex-col text-white">
                     <h3 className="border-b-2 border-white pb-3 text-sm md:text-lg font-medium">
                        Halaman
                     </h3>
                     <ul className="mt-4 flex flex-col gap-4 font-[300] md:text-base text-xs text-white/80">
                        {menu.map((item, index) => (
                           <li key={index} className="w-fit hover:text-white">
                              <Link href={item.href}>{item.title}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="flex min-w-[280px] flex-col text-white">
                     <h3 className="border-b-2 border-white pb-3 text-sm md:text-lg font-medium">
                        Kontak
                     </h3>
                     <ul className="mt-4 flex flex-col gap-4 font-[300] text-white/80 md:text-base text-xs">
                        <li className="flex items-center gap-4 font-[300]">
                           <FiMail className="text-lg" />
                           <span>ust.himatif@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-4 font-[300]">
                           <BsTelephone className="text-lg" />
                           <span>+62 812-9099-4567</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
