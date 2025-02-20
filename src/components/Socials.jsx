import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header({ type, facebook, twitter, youtube, linkedin }) {

   if (type && type === 'text') {

      return (

         <ul className='hidden xs:flex items-center space-x-5'>

            {
               facebook ?
                  <li>

                     <a href={facebook}>
                        Facebook
                     </a>

                  </li>
                  : null
            }

            {
               twitter ?
                  <li>

                     <a href={twitter}>
                        Twitter
                     </a>

                  </li>
                  : null
            }

            {
               youtube ?
                  <li>

                     <a href={youtube}>
                        YouTube
                     </a>

                  </li>
                  : null
            }

            {
               linkedin ?
                  <li>

                     <a href={linkedin}>
                        LinkedIn
                     </a>

                  </li>
                  : null
            }

         </ul>

      );

   } else {

      return (

         <ul className='hidden xs:flex items-center space-x-5'>

            {
               facebook ?
                  <li>

                     <a href={facebook}>
                        <FaFacebookF size={16} />
                     </a>

                  </li>
                  : null
            }

            {
               twitter ?
                  <li>

                     <a href={twitter}>
                        <FaTwitter size={16} />
                     </a>

                  </li>
                  : null
            }

            {
               youtube ?
                  <li>

                     <a href={youtube}>
                        <FaYoutube size={16} />
                     </a>

                  </li>
                  : null
            }

            {
               linkedin ?
                  <li>

                     <a href={linkedin}>
                        <FaLinkedin size={16} />
                     </a>

                  </li>
                  : null
            }

         </ul>

      );

   };

};