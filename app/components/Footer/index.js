import React from 'react';

import { socialLinks } from './mock';
import { FooterSection } from './style';
import { Container } from '../../sc/Container';

const Footer = () => {
   return (
      <FooterSection>
         <Container>
            <nav>
               <ul>
                  {socialLinks.map(({ id, title, path }) => (
                     <li key={id}>
                        <a href={path} target="_blank">
                           {title}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>

            <p>&copy; 2021 All rights reserved</p>
         </Container>
      </FooterSection>
   );
};

export { Footer };
