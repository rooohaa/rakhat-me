import React from 'react';

import { Container } from 'app/sc/Container';
import { SectionTitle } from 'app/sc/SectionTitle';

import { services } from './mock';
import { ServicesSection } from './style';

const Services = () => {
   return (
      <ServicesSection>
         <Container>
            <SectionTitle>What I Do</SectionTitle>

            <div className="services-wrap">
               {services.map(({ id, iconPath, title, descr }) => (
                  <div className="card" key={id}>
                     <div className="icon-wrap">
                        <img src={iconPath} alt={title} />
                     </div>
                     <div className="descr-wrap">
                        <h4>{title}</h4>
                        <p>{descr}</p>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </ServicesSection>
   );
};

export { Services };
