import Link from "next/link";
import React from "react";

const Header = () => {
   return (
      <header className="fixed top-0 right-0 left-0 h-20 flex items-center font-sans bg-[rgba(0, 0, 0, 0.2)]">
         <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
               <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
               <h1 className="text-lg font-bold tracking-[0.1em]">
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
