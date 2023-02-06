import React from "react";
import { Categories, Layout, Posts } from "../../components";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

const Blog = () => {
   return (
      <Layout title="Blogs ~ Himpunan Mahasiswa Teknik Informatika">
         <section className="container mx-auto mt-24 px-6 xl:px-0">
            <div className="relative flex h-36 rounded-xl md:h-40 xl:h-48">
               <h1 className="m-auto font-logo text-2xl font-bold text-white md:text-3xl xl:text-4xl">
                  Blog
               </h1>
               <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
                  <div className="relative h-full w-full">
                     <Image
                        src="https://source.unsplash.com/random/1300×192/?campus"
                        alt=""
                        fill="fill"
                        className="object-cover brightness-[0.4]"
                     />
                  </div>
               </div>
               <div className="absolute -bottom-[26px] left-1/2 w-[80%] -translate-x-1/2 overflow-hidden rounded-xl shadow-xl shadow-gray-200 md:w-[50%]">
                  <div className="flex items-center gap-3 bg-white px-5 py-2.5 md:gap-5 md:px-6 md:py-3 xl:px-7 xl:py-3.5">
                     <BiSearch className="text-xl text-slate-400 md:text-2xl xl:text-3xl" />
                     <input
                        placeholder="Search"
                        className="h-full w-full font-logo text-sm font-medium outline-none placeholder:text-slate-400 md:text-base xl:text-lg"
                     />
                  </div>
               </div>
            </div>
         </section>
         <section className="container mx-auto mt-16 px-6 md:mt-20 xl:mt-24 xl:px-0">
            <Categories />
         </section>
         <Posts />
      </Layout>
   );
};

export default Blog;
