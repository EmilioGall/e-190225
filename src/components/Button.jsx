import React from 'react';
import { FaArrowRight } from "react-icons/fa";

export default function Header({ arrow, text, functionOnClick }) {

   return (

      <button
         className='flex gap-2 items-center border-2 rounded-lg hover:border-customYellow font-customRoboto font-customMedium text-base hover:scale-110 transition duration-700 px-1.5 cursor-default'
         onClick={functionOnClick}
      >

         {text}

         {
            arrow && arrow === true ?
               <FaArrowRight />
               : null
         }

      </button>

   );

};