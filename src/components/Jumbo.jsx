import React from 'react';
import backgroundImage1 from '../assets/img/iStock-1279248902 1.png';
import backgroundImage2 from '../assets/img/iStock-1279248902 2.png';
import Socials from './Socials';

export default function Jumbo() {

   return (

      <section
         className="flex flex-col xs:flex-row justify-between gap-10 text-customLight p-8 pt-20 xs:p-60 bg-cover bg-center w-full bg-image-1 xs:bg-image-2"

      >

         <div
            className="absolute inset-0 bg-gradient-to-b from-customDarkBlue"
            style={{
               zIndex: 0,
            }}
         ></div>

         <h1 className="z-10 font-customRobotoSlab font-customNormal text-2xl cursor-default w-full xs:w-5/12">
            Plans are nothing, planning is everything
         </h1>

         <div className="z-10 w-full xs:w-5/12 pb-5">

            <h3 className="font-customRoboto font-customBold text-sm text-customYellow cursor-default pb-2">
               Maria Rossi
            </h3>

            <p className="font-customRoboto font-customNormal text-base cursor-default">
               Strategic consultant con un focus specifico rivolto a Corporate innovation, Business growth e Marketing.
            </p>

            <a href="/">Discover</a>

         </div>

         <div className="z-10 flex xs:hidden">

            <Socials facebook={'/'} twitter={'/'} youtube={'/'} linkedin={'/'} />

         </div>

         <style jsx>{`
            @media (min-width: 422px) {
               section {
                  background-image: url(${backgroundImage2});
               }
            }
         `}</style>

      </section>

   );

};