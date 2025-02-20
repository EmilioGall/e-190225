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

      <section className="flex flex-col items-center gap-4 text-customLight bg-customDark bg-gradient-to-t from-customDarkBlue pt-24 px-8 xs:px-32 overflow-hidden">

         <div className="flex flex-col xs:flex-row items-center xs:justify-between">

            <h2 className="font-customRoboto font-customNormal text-lg">
               loremipsum.it
            </h2>

            <hr className="text-customLight w-full xs:hidden" />

            <p className="font-customRoboto font-customNormal text-lg text-center">
               Mail: <a href="/">info@example.com</a>
            </p>

            <div className="flex">

               <Socials type={socialsType} facebook={'/'} twitter={'/'} linkedin={'/'} />

            </div>

         </div>

         <span className="text-center">
            © 2021 Tutti i diritti risevati - Design by MM
         </span>

      </section>

   );

};