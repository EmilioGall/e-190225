import React, { useEffect, useState } from 'react';

export default function InfiniteCarousel({ brands }) {

   const extendedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

   console.log(brands);

   return (
      <div className="flex text-customYellow overflow-x-hidden border border-x-0 border-customYellow w-full">

         <ul className="flex gap-2 animate-infinite-scroll">

            {
               extendedBrands.map((brand, index) => {

                  return (
                     <li
                        className="font-customRobotoSlab font-customNormal text-lg flex gap-2"
                        key={index}
                     >
                        {brand.name}

                        <span>-</span>
                        
                     </li>
                  )

               })
            }

         </ul>

      </div>
   );
};