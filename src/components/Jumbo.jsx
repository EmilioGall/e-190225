import React from 'react';
import Socials from './Socials';
import Button from './Button';

export default function Jumbo() {

   return (

      <section
         className="flex flex-col xs:flex-row justify-between gap-10 text-customLight p-12 pt-40 xs:p-60 bg-cover bg-center w-full bg-image-1 xs:bg-image-2 relative"

      >

         <div
            className="absolute inset-0 bg-gradient-to-b from-customDarkBlue"
            style={{
               zIndex: 0,
            }}
         ></div>

         <h1 className="z-10 font-customRobotoSlab font-customNormal text-3xl cursor-default w-full xs:w-5/12">
            Plans are nothing, planning is everything
         </h1>

         <div className="z-10 w-full xs:w-5/12 xs:pt-6 flex flex-col gap-10 justify-between mb-32">

            <div>

               <h3 className="font-customRoboto font-customBold text-sm text-customYellow cursor-default pb-2">
                  Maria Rossi
               </h3>

               <p className="font-customRoboto font-customNormal text-base cursor-default">
                  Strategic consultant con un focus specifico rivolto a Corporate innovation, Business growth e Marketing.
               </p>

            </div>

            <div>

               <Button arrow={true} text={'DISCOVER'} cursor={'default'} />

            </div>

         </div>

         <div className="z-10 flex xs:hidden">

            <Socials facebook={'/'} twitter={'/'} youtube={'/'} linkedin={'/'} />

         </div>

      </section>

   );

};