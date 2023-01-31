import React from "react";
import { Categories, Layout, Posts } from "../../components";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

const Blog = () => {
   return (
      <Layout title="Blogs ~ Himpunan Mahasiswa Teknik Informatika">
         <section className="container relative mx-auto mt-24 flex h-48 rounded-xl">
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
            <h1 className="m-auto font-logo text-4xl font-bold text-white">
               Blog
            </h1>
            <div className="absolute -bottom-[26px] left-1/2 w-[50%] -translate-x-1/2 overflow-hidden rounded-xl shadow-xl shadow-gray-200">
               <div className="flex items-center gap-5 bg-white px-7 py-3.5">
                  <BiSearch className="text-3xl text-slate-400" />
                  <input
                     placeholder="Search"
                     className="h-full w-full font-logo text-lg font-medium outline-none placeholder:text-slate-400"
                  />
               </div>
            </div>
         </section>
         <section className="container mx-auto mt-24">
            <Categories />
         </section>
         <Posts />
      </Layout>
   );
};

export default Blog;
