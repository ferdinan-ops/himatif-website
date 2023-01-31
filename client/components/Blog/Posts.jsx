import React from "react";
import { posts } from "../../utils/data";
import Post from "./Post";

const Posts = () => {
   return (
      <section className="container mx-auto mt-10 bg-white">
         <div className="flex flex-wrap items-center gap-14">
            {posts.map((post, index) => (
               <Post key={index} post={post} />
            ))}
         </div>
         <div className="mt-14 mb-20 flex justify-center">
            <button className="rounded-lg bg-primary py-3 px-6 font-medium text-white shadow-2xl shadow-primary/60">
               Load More
            </button>
         </div>
      </section>
   );
};

export default Posts;
