import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Logo } from "../../assets";
import { useRouter } from "next/router";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { menu } from "../../utils/data";

const NavLink = ({ href, children, isTop, isHome }) => {
   const router = useRouter();
   return (
      <Link
         href={href}
         className={`text-[15px] font-medium tracking-wide ${
            router.pathname === href
               ? ""
               : isTop
               ? `text-font-black/60 hover:text-font-black ${
                    isHome && "md:text-white/60 md:hover:text-white"
                 }`
               : "text-font-black/60 hover:text-font-black"
         }`}
      >
         {children}
      </Link>
   );
};

const Header = ({ isHome }) => {
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

   const home = isHome ? "text-white" : "text-font-black";

   return (
      <header
         className={`fixed inset-x-0 top-0 z-50 flex h-24 items-center px-6 transition-all xl:px-0 ${
            !isTop
               ? "bg-white text-font-black shadow"
               : `${
                    !isHome
                       ? "bg-white text-font-black"
                       : "bg-transparent text-font-black xl:text-white"
                 }`
         }`}
      >
         <div className="container mx-auto flex items-center justify-between font-sans">
            <Link className="flex items-center gap-4" href="/">
               <Image
                  src={Logo}
                  alt=""
                  className="h-7 w-7 rounded-full md:h-9 md:w-9"
               />
               <h1 className={`logo ${isTop ? home : "text-font-black"}`}>
                  HIMATIF
               </h1>
            </Link>
            <nav
               className={`nav xl:translate-x-0 ${
                  isShow ? "translate-x-0" : "-translate-x-full"
               }`}
            >
               <HiXMark
                  className="w-fit self-end pt-4 text-5xl xl:hidden"
                  onClick={() => setIsShow(false)}
               />
               {menu.map((item, index) => (
                  <NavLink
                     href={item.href}
                     isTop={isTop}
                     key={index}
                     isHome={isHome}
                  >
                     {item.title}
                  </NavLink>
               ))}
            </nav>
            <HiBars3
               className={`text-3xl xl:hidden ${
                  isTop ? home : "text-font-black"
               }`}
               onClick={() => setIsShow(true)}
            />
         </div>
      </header>
   );
};

export default Header;
