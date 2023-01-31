import React from "react";
import { categories } from "../../utils/data";

const Categories = () => {
   return (
      <ul className="no-scrollbar mx-auto flex items-center gap-6 overflow-y-auto font-medium text-font-black">
         <li className="min-w-max cursor-pointer rounded-full bg-primary px-6 py-2 text-white">
            Semua
         </li>
         {categories.map((category, index) => (
            <li
               className="min-w-max cursor-pointer rounded-full px-4 py-2 hover:text-primary"
               key={index}
            >
               {category}
            </li>
         ))}
      </ul>
   );
};

export default Categories;
