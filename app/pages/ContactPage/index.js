import React from 'react';

import { Container } from 'app/sc/Container';
import { ContactForm } from 'app/components';

import { ContactSection } from './style';

const ContactPageComponent = () => {
   return (
      <ContactSection>
         <Container>
            <div className="contact-info">
               <div>
                  <img src="/icons/mobile.svg" alt="Icon" />
                  <h5>8 (747) 230-22-39</h5>
               </div>
               <div>
                  <img src="/icons/geo.svg" alt="Icon" />
                  <h5>Nur-Sultan, KZ</h5>
               </div>
               <div>
                  <img src="/icons/email.svg" alt="Icon" />
                  <h5>rlxrlx989@gmail.com</h5>
               </div>
            </div>
            <ContactForm />
         </Container>
      </ContactSection>
   );
};

export { ContactPageComponent };
