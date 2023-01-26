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
         <div className="container mx-auto py-[72px]">
            <div className="flex justify-between">
               <div className="flex max-w-sm flex-col">
                  <div className="flex items-center gap-4 font-logo font-bold text-white ">
                     <Image src={Logo} alt="" className="h-11 w-fit" />
                     <h2 className="text-3xl">HIMATIF</h2>
                  </div>
                  <p className="mt-4 text-white/80">
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor
                     do amet sint. Velit officia consequat duis enim velit
                     mollit.
                  </p>
                  <div className="mt-8 flex items-center gap-8 text-font-black">
                     {sosialMedia.map((item, index) => (
                        <Link
                           key={index}
                           href={item.href}
                           className="rounded-full bg-white p-2 hover:bg-slate-300"
                        >
                           {item.icon}
                        </Link>
                     ))}
                  </div>
               </div>
               <div className="flex justify-between gap-16">
                  <div className="flex min-w-[280px] flex-col text-white">
                     <h3 className="border-b-2 border-white pb-3 text-lg font-medium">
                        Halaman
                     </h3>
                     <ul className="mt-4 flex flex-col gap-4 font-[300] text-white/80">
                        {menu.map((item, index) => (
                           <li key={index} className="w-fit hover:text-white">
                              <Link href={item.href}>{item.title}</Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="flex min-w-[280px] flex-col text-white">
                     <h3 className="border-b-2 border-white pb-3 text-lg font-medium">
                        Kontak
                     </h3>
                     <ul className="mt-4 flex flex-col gap-4 font-[300] text-white/80">
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
