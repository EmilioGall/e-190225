import React from 'react';
import Socials from './Socials';

export default function Header() {

   return (

      <header className="absolute w-full z-10">

         <div className="flex justify-between bg-none text-customLight p-8 xs:px-32">

            <h2 className="font-customRoboto font-customBold text-sm xs:text-base cursor-default">loremipsum.it</h2>

            <p className="flex items-center font-customRoboto text-3xs xs:text-xs cursor-default">
               <span className="font-customBold">IT</span>
               <span className="font-customLight">/</span>
               <span className="font-customLight">EN</span>
            </p>

            <div className="hidden xs:flex">

               <Socials twitter={'/'} youtube={'/'} linkedin={'/'} />

            </div>

         </div>

      </header>

   );

};
