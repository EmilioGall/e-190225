import React, { useState } from 'react';
import Button from './Button';

export default function Biography() {

   const [showBiography, setShowBiography] = useState(false);

   const handleButtonClick = () => {

      setShowBiography(!showBiography);

   };

   return (

      <section className="flex flex-col xs:items-center text-customLight bg-customDark py-8 ">

         <h2 className="font-customRoboto font-customNormal text-lg pb-4 xs:pb-8">BIOGRAPHY</h2>

         <div className={`relative flex flex-col xs:items-center px-8 transition-all delay-1000 ${showBiography ? 'w-2/3' : 'w-full'}`}>

            <div className={`flex justify-center gap-8 pb-4 transition-all overflow-hidden ${showBiography ? 'delay-1000 duration-500 opacity-100 max-h-full' : 'absolute duration-1000 opacity-0 max-h-0'}`}
            >

               <div className="font-customRoboto font-customNormal text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet. Pellentesque dapibus euismod enim feugiat sagittis. Sed ornare suscipit tellus, at convallis ante dapibus eget. Morbi vel augue sed dui ornare pretium eget ut urna. Vestibulum efficitur egestas ex nec euismod. Vestibulum non lacus ante. Aenean quis aliquet justo. Vivamus consectetur rutrum magna vitae semper. Nunc vitae magna lorem.
               </div>

               <div className="font-customRoboto font-customNormal text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet. Pellentesque dapibus euismod enim feugiat sagittis. Sed ornare suscipit tellus, at convallis ante dapibus eget. Morbi vel augue sed dui ornare pretium eget ut urna. Vestibulum efficitur egestas ex nec euismod. Vestibulum non lacus ante. Aenean quis aliquet justo. Vivamus consectetur rutrum magna vitae semper. Nunc vitae magna lorem.
               </div>

            </div>

            <div className={`xs:w-1/3 transition-all duration-1000 overflow-hidden ${showBiography ? 'absolute duration-1000 opacity-0 max-h-0' : 'delay-1000 duration-200 opacity-100 max-h-full'}`}>

               <p className="font-customRoboto font-customNormal text-sm pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet.
               </p>

            </div>

            <div className={`z-20 ${showBiography ? 'self-end' : ''}`}>

               <Button arrow={false} text={showBiography ? 'LESS' : 'READ MORE'} functionOnClick={handleButtonClick} />

            </div>

         </div>

      </section>

   );

};