import React from "react";
import { categories } from "../../utils/data";

const Categories = () => {
   return (
      <ul className="no-scrollbar mx-auto flex items-center gap-3 overflow-y-auto font-medium text-font-black md:gap-5 xl:gap-6">
         <li className="min-w-max cursor-pointer rounded-full bg-primary px-6 py-2 text-xs text-white md:text-sm xl:text-base">
            Semua
         </li>
         {categories.map((category, index) => (
            <li
               key={index}
               className="min-w-max cursor-pointer rounded-full px-4 py-2 text-xs hover:text-primary md:text-sm xl:text-base"
            >
               {category}
            </li>
         ))}
      </ul>
   );
};

export default Categories;
