import React from 'react';

export default function Clients() {

   const brands = ['LAURENE', 'ITALY', 'VAGUE', 'KLEE', 'KLESS', 'RIK', 'ECO', 'WOOD']
   const brandString = ` ${brands.join(' - ')} -`;

   return (

      <section className="flex flex-col items-center text-customLight bg-customDark py-8 overflow-hidden">

         <h2 className="font-customRoboto font-customNormal text-lg text-center pb-4 xs:pb-8">
            CLIENTS & COLLABORATIONS
         </h2>

         <div className="w-full overflow-hidden border-2 border-x-0 border-customYellow">

            <div className="font-customRobotoSlab font-customNormal text-lg text-customYellow flex whitespace-nowrap">

               <span className="ps-2">{brandString}</span>
               <span className="ps-2">{brandString}</span>
               <span className="ps-2">{brandString}</span>

            </div>

         </div>

      </section>

   );

};