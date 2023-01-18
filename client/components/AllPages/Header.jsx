import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "../../assets";
import { useRouter } from "next/router";

const NavLink = ({ href, children }) => {
   const router = useRouter();
   return (
      <Link
         href={href}
         className={
            router.pathname === href
               ? "text-white"
               : "text-white/60 hover:text-white"
         }
      >
         {children}
      </Link>
   );
};

const Header = () => {
   return (
      <header className="fixed top-0 right-0 left-0 z-50 flex h-24 items-center px-6 md:px-6 xl:px-0">
         <div className="container mx-auto flex items-center justify-between font-sans text-white">
            <div className="flex items-center gap-4">
               <Image
                  src={Logo}
                  alt=""
                  className="h-7 w-7 rounded-full md:h-9 md:w-9"
               />
               <h1 className="font-logo text-lg font-semibold tracking-wider md:text-[22px]">
                  HIMATIF
               </h1>
            </div>
            <nav className="hidden items-center gap-7 text-[15px] font-medium tracking-wide xl:flex">
               <NavLink href="/">Beranda</NavLink>
               <NavLink href="/blogs">Blog</NavLink>
               <NavLink href="/structure">Struktur</NavLink>
               <NavLink href="/contact-us">Hubungi Kami</NavLink>
            </nav>
            <div className="flex w-7 cursor-pointer flex-col gap-[5px] xl:hidden">
               <span className="h-[3px] w-full rounded-full bg-white"></span>
               <span className="h-[3px] w-full rounded-full bg-white"></span>
               <span className="h-[3px] w-full rounded-full bg-white"></span>
            </div>
         </div>
      </header>
   );
};

export default Header;
