import React from 'react';

import { Container } from 'app/sc/Container';
import { ContactForm } from 'app/components';

import { ContactSection } from './style';

const ContactPageComponent = () => {
   return (
      <ContactSection>
         <div className="map">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.2655439505734!2d71.42605971575587!3d51.12200977957373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245848285937047%3A0xf1501c0ee5909d85!2z0JDQsdGDLdCU0LDQsdC4INCf0LvQsNC30LA!5e0!3m2!1sru!2skz!4v1620999932516!5m2!1sru!2skz"
               width="1200"
               height="150"
               frameBorder="0"
               allowFullScreen=""
               loading="lazy"
            ></iframe>
         </div>
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
