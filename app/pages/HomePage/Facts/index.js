import React from 'react';

import { FactsSection } from './style';
import { Container } from 'app/sc/Container';
import { SectionTitle } from 'app/sc/SectionTitle';

import { facts } from './mock';

const Facts = () => {
   return (
      <FactsSection>
         <Container>
            <SectionTitle>Fun Facts</SectionTitle>

            <div className="facts-wrap">
               {facts.map(({ id, iconPath, title, count }) => (
                  <div key={id} className="fact-card">
                     <div>
                        <img src={iconPath} alt={title} />
                     </div>
                     <h5>{title}</h5>
                     <span>{count}</span>
                  </div>
               ))}
            </div>
         </Container>
      </FactsSection>
   );
};

export { Facts };
