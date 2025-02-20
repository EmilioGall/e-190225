import React from 'react';
import Socials from './Socials';

export default function Jumbo() {

   return (

      <section className="flex flex-col xs:flex-row justify-between gap-10 p-8 xs:p-40">

         <h1 className="font-customRobotoSlab font-customNormal text-2xl cursor-default w-full xs:w-5/12">
            Plans are nothing, planning is everything
         </h1>

         <div className="w-full xs:w-5/12 pb-5">

            <h3 className="font-customRoboto font-customBold text-sm text-customYellow cursor-default pb-2">
               Maria Rossi
            </h3>

            <p className="font-customRoboto font-customNormal text-base cursor-default">
               Strategic consultant con un focus specifico rivolto a Corporate innovation, Business growth e Marketing.
            </p>

            <a href="/">Discover</a>

         </div>

         <div className="flex xs:hidden">

            <Socials facebook={'/'} twitter={'/'} youtube={'/'} linkedin={'/'} />

         </div>

      </section>

   );

};