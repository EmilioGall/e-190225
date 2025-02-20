import React, { useState } from 'react';
import Button from './Button';

export default function Biography() {

   const [showBiography, setShowBiography] = useState(true);

   const handleButtonClick = () => {

      showBiography ? setShowBiography(false) : setShowBiography(true);
   };

   return (

      <section className="flex flex-col xs:items-center text-customLight bg-customDark p-8  xs:px-60">

         <h2 className="font-customRoboto font-customNormal text-lg pb-4 xs:pb-8">BIOGRAPHY</h2>

         {
            showBiography ? (
               <div>

                  <div className="flex flex-col xs:flex-row xs:justify-center gap-8 transition-opacity duration-1000 opacity-100 pb-4">

                     <div className="font-customRoboto font-customNormal text-sm xs:w-1/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet. Pellentesque dapibus euismod enim feugiat sagittis. Sed ornare suscipit tellus, at convallis ante dapibus eget. Morbi vel augue sed dui ornare pretium eget ut urna. Vestibulum efficitur egestas ex nec euismod. Vestibulum non lacus ante. Aenean quis aliquet justo. Vivamus consectetur rutrum magna vitae semper. Nunc vitae magna lorem.
                     </div>

                     <div className="font-customRoboto font-customNormal text-sm xs:w-1/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet. Pellentesque dapibus euismod enim feugiat sagittis. Sed ornare suscipit tellus, at convallis ante dapibus eget. Morbi vel augue sed dui ornare pretium eget ut urna. Vestibulum efficitur egestas ex nec euismod. Vestibulum non lacus ante. Aenean quis aliquet justo. Vivamus consectetur rutrum magna vitae semper. Nunc vitae magna lorem.
                     </div>

                  </div>

                  <div>

                     <Button arrow={false} text={'LESS'} functionOnClick={handleButtonClick} />

                  </div>

               </div>

            ) : (

               <div>


                  <p className="font-customRoboto font-customNormal text-sm pb-4 xs:w-1/3 transition-opacity duration-1000 opacity-100">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque euismod libero, in commodo velit tincidunt at. Donec cursus scelerisque sodales. Vivamus auctor fringilla laoreet. Nulla lacinia metus sed lorem aliquet, nec varius nunc efficitur. Nullam rhoncus a neque aliquam interdum.Suspendisse vehicula blandit nulla nec imperdiet.
                  </p>

                  <div>

                     <Button arrow={false} text={'READ MORE'} functionOnClick={handleButtonClick} />

                  </div>
               </div>
            )
         }



      </section>

   );

};