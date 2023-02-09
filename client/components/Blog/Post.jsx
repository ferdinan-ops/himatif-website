import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSend } from "react-icons/io";

const Post = ({ post }) => {
   return (
      <div className="flex flex-col gap-3 md:max-w-[336px] xl:max-w-[396px] w-full">
         <div className="group relative w-full cursor-pointer overflow-hidden rounded-2xl h-44 md:h-48 xl:h-[240px]">
            <Image src={post.image} alt="" fill="fill" className="object-cover" />
            <div className="absolute inset-0 flex cursor-default bg-slate-900/50 opacity-0 transition-all group-hover:opacity-100">
               <Link href="/blogs/detail" className="m-auto flex h-12 w-12 cursor-pointer rounded-full bg-primary md:h-14 md:w-14 xl:h-[72px] xl:w-[72px]">
                  <IoIosSend className="m-auto text-2xl text-white md:text-3xl xl:text-4xl" />
               </Link>
            </div>
         </div>
         <div className="flex flex-col gap-1 md:gap-2 px-1 md:px-2 xl:gap-4 xl:p-4">
            <div className="flex items-center gap-2 text-xs md:text-sm xl:text-base">
               <span className="font-semibold text-primary">Games</span> &bull;
               <span className="text-slate-500">Jan 16,2023</span>
            </div>
            <Link href="/blogs/detail">
               <h1 className="cursor-pointer font-logo text-base font-bold text-font-black hover:text-primary md:text-lg xl:text-xl">
                  Pelaksanaan Ibadah Bulanan HIMATIF Kedua
               </h1>
            </Link>
            <p className="truncate-lines text-xs text-slate-500 md:text-sm xl:text-base">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
               enim inventore quod repellendus harum placeat. Officia
               consectetur expedita quae, quo maiores porro id asperiores? Nulla
               architecto similique quae cumque iusto?
            </p>
         </div>
      </div>
   );
};

export default Post;
