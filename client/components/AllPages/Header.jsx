import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Logo } from "../../assets";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { menu } from "../../utils/data";

const NavLink = ({ href, children, isTop }) => {
   const router = useRouter();
   return (
      <Link
         href={href}
         className={`text-[15px] font-medium tracking-wide ${router.pathname === href ? "" : isTop
            ? "text-white/60 hover:text-white"
            : "text-white/60 hover:text-white md:text-font-black/60 md:hover:text-font-black"}`}
      >{children}</Link>
   );
};

const Header = () => {
   const [isShow, setIsShow] = useState(false);
   const [isTop, setIsTop] = useState(true);

   useEffect(() => {
      const scrollHandler = () => {
         setIsTop(window.pageYOffset <= 20);
      };
      window.addEventListener("scroll", scrollHandler);
      scrollHandler();
      return () => {
         window.removeEventListener("scroll", scrollHandler);
      };
   }, []);

   return (
      <header
         className={`fixed top-0 right-0 left-0 z-50 flex items-center px-4 transition-all md:px-6 xl:px-0 ${isTop
            ? "h-24 bg-transparent text-white"
            : "h-20 bg-white text-font-black md:text-font-black"
            }`}
      >
         <div className="container mx-auto flex items-center justify-between font-sans">
            <div className="flex items-center gap-4">
               <Image src={Logo} alt="" className="h-7 w-7 rounded-full md:h-9 md:w-9" />
               <h1 className={`font-logo text-lg font-semibold tracking-wider md:text-[22px] ${isTop ? "text-white" : "text-font-black"}`}>
                  HIMATIF
               </h1>
            </div>
            <nav
               className={`fixed left-0 top-0 bottom-0 right-0 flex flex-col items-start gap-4 bg-primary px-4 transition-all xl:static xl:translate-x-0 xl:flex-row xl:items-center xl:gap-7 xl:bg-transparent xl:p-0
               ${isShow ? "translate-x-0" : "-translate-x-full"}`}
            >
               <XMarkIcon className="w-10 self-end pt-4 xl:hidden" onClick={() => setIsShow(false)} />
               {menu.map((item, index) => (
                  <NavLink href={item.href} isTop={isTop} key={index}>
                     {item.title}
                  </NavLink>
               ))}
            </nav>
            <Bars3Icon
               className={`w-7 xl:hidden ${isTop ? "text-white" : "text-font-black"}`}
               onClick={() => setIsShow(true)}
            />
         </div>
      </header>
   );
};

export default Header;
