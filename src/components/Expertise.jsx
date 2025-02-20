import React from 'react';

import bgImage1 from '../assets/img/logo-biennale 1.png';
import bgImage2 from '../assets/img/_pubblicazioneOTTAGONO-2 4.png';
import bgImage3 from '../assets/img/detlefovermann_0881 1.png';
import bgImage4 from '../assets/img/editing.png';
import bgImage5 from '../assets/img/makegusto.png';
import bgImage6 from '../assets/img/wowmilano.png';
import SlideBox from './SlideBox';

export default function Expertise() {

   const titles = ['Art Curator', 'Politics and Journalism', 'Managing', 'Editing and Writing', 'Strategic Consultancy', 'Start-Up']

   const expertiseData = [

      {
         img: bgImage1,
         title: titles[0],
         order: 'order-1',
         hoverText: 'Founder, art director, exhibition coordinator, Director of the Contemporary Art Institute of Lisbon, Portugal, and curator for the Scandinavian Pavilion at the 2023 Venice Art Biennale.',
         hoverTitle: titles[0],
      },
      { img: bgImage2, title: titles[1], order: 'order-2 xs:order-3' },
      { img: bgImage3, title: titles[2], order: 'order-3 xs:order-2' },
      { img: bgImage4, title: titles[3], order: 'order-4' },
      { img: bgImage5, title: titles[4], order: 'order-5' },
      { img: bgImage6, title: titles[5], order: 'order-6' },

   ];

   return (

      <section className="flex flex-col xs:items-center text-customLight bg-customDark py-8">

         <h2 className="font-customRoboto font-customNormal text-lg ps-8 xs:ps-0 xs:text-center pb-4 xs:pb-8">EXPERTISE</h2>

         <div className="grid grid-cols-1 xs:grid-cols-3 w-full">

            <SlideBox
               backgroundImage={expertiseData[0].img}
               title={expertiseData[0].title}
               hoverText={expertiseData[0].hoverText}
               hoverTitle={expertiseData[0].hoverTitle}
               order={expertiseData[0].order}
            />

            {
               expertiseData.slice(1).map((item, index) => (

                  <div
                     key={index + 1}
                     className={`w-full h-full aspect-square z-30 bg-no-repeat bg-cover bg-center ${item.order}`}
                     style={{ backgroundImage: `url(${item.img})` }}
                  >

                     <div className="flex flex-col items-center justify-center w-full h-full">

                        <h3 className="font-customRobotoSlab font-customMedium text-xl xs:text-2xl bg-customDark w-2/3  text-white text-center px-1">

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