import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "../../assets";

const Header = () => {
   return (
      <header className="fixed top-0 right-0 left-0 h-20 flex items-center bg-black bg-opacity-[0.2] z-50">
         <div className="container mx-auto flex items-center justify-between text-white font-sans">
            <div className="flex items-center gap-4">
               <Image src={Logo} alt="" className="w-9 h-9 rounded-full" />
               <h1 className="font-bold tracking-[0.2em]">
                  HIMPUNAN MAHASISWA TEKNIK INFORMATIKA
               </h1>
            </div>
            <nav className="flex items-center gap-6 tracking-[0.04em]">
               <Link href="/">Beranda</Link>
               <Link href="/">Blog</Link>
               <Link href="/">Struktur</Link>
               <Link href="/">Hubungi Kami</Link>
            </nav>
         </div>
      </header>
   );
};

export default Header;
