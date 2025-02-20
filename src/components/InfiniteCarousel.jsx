import React from 'react';

export default function Clients({string}) {

   return (

      <div className="w-full overflow-hidden border-2 border-x-0 border-customYellow">

         <div className="font-customRobotoSlab font-customNormal text-lg text-customYellow flex whitespace-nowrap">

            <span className="ps-2">{string}</span>
            <span className="ps-2">{string}</span>
            <span className="ps-2">{string}</span>

         </div>

      </div>


   );

};