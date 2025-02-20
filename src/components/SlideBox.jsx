import React, { useState } from 'react';

const SlideBox = ({ backgroundImage, title, hoverText, hoverTitle, order }) => {

   const [showBox, setShowBox] = useState(false);

   const handleHover = () => {

      setShowBox(!showBox);

   };

   return (

      <div
         className={`relative flex w-full h-full aspect-square bg-no-repeat bg-cover bg-center overflow-x-hidden ${order}`}
         style={{ backgroundImage: `url(${backgroundImage})` }}
         onMouseEnter={() => handleHover(true)}
         onMouseLeave={() => handleHover(false)}
      >

         <div className="flex flex-col items-center justify-center w-full h-full z-10">

            <h3 className="font-customRobotoSlab font-customMedium text-xl xs:text-2xl bg-customDark w-2/3  text-white text-center px-1">

               {title}

            </h3>

         </div>

         <div className={`absolute transition-all duration-1000 ${showBox ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center bg-customGrey w-full h-full z-20 p-11`}>


            <span className="font-customRoboto font-customLight text-sm text-white text-center py-2">

               {hoverTitle}

            </span>

            <p className="font-customRoboto font-customMedium text-base text-white text-center py-4">
               {hoverText}
            </p>

         </div>

      </div>

   );
};

export default SlideBox;