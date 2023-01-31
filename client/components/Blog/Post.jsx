import Image from "next/image";
import React from "react";
import { IoIosSend } from "react-icons/io";

const Post = ({ post }) => {
   return (
      <div className="flex max-w-[396px] flex-col gap-3">
         <div className="group relative h-[240px] w-full cursor-pointer overflow-hidden rounded-2xl">
            <Image
               src={post.image}
               alt=""
               fill="fill"
               className="object-cover"
            />
            <div className="absolute inset-0 flex cursor-default bg-slate-900/50 opacity-0 transition-all group-hover:opacity-100">
               <div className="m-auto flex h-[72px] w-[72px] cursor-pointer rounded-full bg-primary">
                  <IoIosSend className="m-auto text-4xl text-white" />
               </div>
            </div>
         </div>
         <div className="flex flex-col gap-4 p-4">
            <div className="flex items-center gap-2">
               <span className="font-semibold text-primary">Games</span> &bull;
               <span className="text-slate-500">Jan 16,2023</span>
            </div>
            <h1 className="cursor-pointer font-logo text-xl font-bold text-font-black hover:text-primary">
               Pelaksanaan Ibadah Bulanan HIMATIF Kedua
            </h1>
            <p className="truncate-lines text-slate-500">
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
