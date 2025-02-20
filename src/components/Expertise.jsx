import React from 'react';

import bgImage1 from '../assets/img/logo-biennale 1.png';
import bgImage2 from '../assets/img/_pubblicazioneOTTAGONO-2 4.png';
import bgImage3 from '../assets/img/detlefovermann_0881 1.png';
import bgImage4 from '../assets/img/editing.png';
import bgImage5 from '../assets/img/makegusto.png';
import bgImage6 from '../assets/img/wowmilano.png';

export default function Expertise() {

   const titles = ['Art Curator', 'Politics and Journalism', 'Managing', 'Editing and Writing', 'Strategic Consultancy', 'Start-Up']

   const expertiseData = [

      { img: bgImage1, title: titles[0] },
      { img: bgImage2, title: titles[1] },
      { img: bgImage3, title: titles[2] },
      { img: bgImage4, title: titles[3] },
      { img: bgImage5, title: titles[4] },
      { img: bgImage6, title: titles[5] },

   ];

   return (

      <section className="flex flex-col xs:items-center text-customLight bg-customDark py-8">

         <h2 className="font-customRoboto font-customNormal text-lg ps-8 xs:ps-0 xs:text-center pb-4 xs:pb-8">EXPERTISE</h2>

         <div className="grid grid-cols-1 xs:grid-cols-3 w-full">

            {
               expertiseData.map((item, index) => (

                  <div
                     key={index}
                     className="w-full h-full aspect-square bg-no-repeat bg-cover bg-center"
                     style={{ backgroundImage: `url(${item.img})` }}
                  >

                     <div className="flex items-center justify-center h-full">

                        <h3 className="font-customRobotoSlab font-customMedium text-xl xs:text-2xl bg-customDark w-1/2 text-white text-center px-0">

                           {item.title}

                        </h3>

                     </div>

                  </div>

               ))
            }

         </div>

      </section>

   );

};