import React, { useState, useEffect } from 'react';
import Socials from './Socials';

export default function Footer() {

   const [socialsType, setSocialsType] = useState('');

   function handleResize() {

      if (window.innerWidth >= 422) {

         setSocialsType('text');

      } else {

         setSocialsType('');

      }

   };

   useEffect(() => {

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);

   }, []);

   return (

      <section className="flex flex-col gap-4 text-customLight bg-customDark bg-gradient-to-t from-customDarkBlue pt-12 pb-4 px-8 xs:px-32 overflow-hidden">

         <div className="grid grid-cols-1 grid-rows-10 xs:grid-cols-3 xs:grid-rows-2 items-center xs:justify-between gap-2 text-center xs:text">

            <div className="row-span-2 self-end">

               <h2 className="font-customRoboto font-customBold text-sm text-center xs:text-start cursor-default">
                  loremipsum.it
               </h2>

            </div>

            <hr className="text-customLight w-full xs:hidden row-span-1" />

            <div className="row-span-2 self-start">

               <p className="font-customRoboto font-customLight xs:font-customNormal text-2xs text-center">
                  Mail: <a href="/">info@example.com</a>
               </p>

            </div>

            <div className="row-span-2">

               <div className="flex justify-center xs:justify-end">
                  <Socials type={socialsType} facebook={'/'} twitter={'/'} linkedin={'/'} />
               </div>

            </div>

            <div className="row-span-2 col-span-1 xs:col-span-3 pt-8 cursor-default">

               <span className="font-customRoboto font-customNormal text-3xs text-customGrey text-center">
                  © 2021 Tutti i diritti risevati - Design by MM
               </span>

            </div>

         </div>

      </section>

   );

};