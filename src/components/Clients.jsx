import React from 'react';
import InfiniteCarousel from './InfiniteCarousel';

export default function Clients() {

   const brands = [
      { name: 'LAURENE' },
      { name: 'ITALY' },
      { name: 'VAGUE' },
      { name: 'KLEE' },
      { name: 'KLESS' },
      { name: 'RIK' },
      { name: 'ECO' },
      { name: 'WOOD' },
   ];

   return (

      <section className="flex flex-col items-center text-customLight bg-customDark bg-gradient-to-b from-customDarkBlue pt-24 overflow-hidden">

         <h2 className="font-customRoboto font-customNormal text-lg text-center pb-4 xs:pb-8">
            CLIENTS & COLLABORATIONS
         </h2>

         <InfiniteCarousel brands={brands} />

      </section>

   );

};