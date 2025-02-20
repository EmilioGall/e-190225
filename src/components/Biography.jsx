import React, { useState } from 'react';
import Button from './Button';

export default function Biography() {

   const [showBiography, setShowBiography] = useState(false);

   const handleButtonClick = () => {

      setShowBiography(!showBiography);

   };

   return (

      <section className="flex flex-col xs:items-center text-customLight bg-customDark py-8 px-8 xs:px-0">

         <h2 className="font-customRoboto font-customNormal text-lg pb-4 xs:pb-8">BIOGRAPHY</h2>

         <div className={`relative flex flex-col xs:items-center transition-all delay-500 ${showBiography ? 'w-2/3' : 'w-full'}`}>

            <div className={`flex flex-col transition-all ${showBiography ? 'delay-500 duration-1000 opacity-100' : 'absolute duration-700 opacity-0 '}`}>

               <div className={`flex flex-col xs:flex-row xs:justify-center gap-8 pb-4`}
               >

                  <div className="font-customRoboto font-customNormal text-sm">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet. Pellentesque dapibus euismod enim feugiat sagittis. Sed ornare suscipit tellus, at convallis ante dapibus eget. Morbi vel augue sed dui ornare pretium eget ut urna. Vestibulum efficitur egestas ex nec euismod. Vestibulum non lacus ante. Aenean quis aliquet justo. Vivamus consectetur rutrum magna vitae semper. Nunc vitae magna lorem.
                  </div>

                  <div className="font-customRoboto font-customNormal text-sm">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet. Pellentesque dapibus euismod enim feugiat sagittis. Sed ornare suscipit tellus, at convallis ante dapibus eget. Morbi vel augue sed dui ornare pretium eget ut urna. Vestibulum efficitur egestas ex nec euismod. Vestibulum non lacus ante. Aenean quis aliquet justo. Vivamus consectetur rutrum magna vitae semper. Nunc vitae magna lorem.
                  </div>

               </div>

               <div className={`z-20 self-end`}>

                  <Button arrow={false} text={'LESS'} functionOnClick={handleButtonClick} />

               </div>

            </div>

            <div className={`flex flex-col items-center xs:w-1/3 transition-all ${showBiography ? 'absolute duration-700 opacity-0 ' : 'delay-500 duration-1000 opacity-100'}`}>

               <p className="font-customRoboto font-customNormal text-sm pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet.
               </p>

               <div className={`z-20`}>

                  <Button arrow={false} text={'READ MORE'} functionOnClick={handleButtonClick} />

               </div>

            </div>


         </div>

      </section>

   );

};