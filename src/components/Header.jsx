import React from 'react';

export default function Header() {

   return (

      <header className='flex justify-between bg-customDarkBlue xs:bg-customYellow text-customLight  p-8 '>

         <h2 className="font-customRoboto font-customBold text-sm xs:text-base cursor-default">loremipsum.it</h2>

         <p className='flex items-center font-customRoboto text-3xs xs:text-xs cursor-default'>
            <span className='font-customBold'>IT</span>
            <span className='font-customLight'>/</span>
            <span className='font-customLight'>EN</span>
         </p>

         <nav className='hidden xs:block'>

            <a href="/">A</a>
            <a href="/">B</a>
            <a href="/">C</a>

         </nav>

      </header>

   );

};
