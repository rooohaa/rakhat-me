import React from 'react';

import { InfoCard } from './InfoCard';
import { Container } from 'app/sc/Container';
import { SectionTitle } from 'app/sc/SectionTitle';

import { RoadMapSection } from './style';
import { education, exp } from './mock';

const RoadMap = () => {
   return (
      <RoadMapSection>
         <Container>
            <div className="educ-section">
               <SectionTitle>Education</SectionTitle>
               <div className="cards-wrap">
                  {education.map(({ id, position, year, descr, place }) => (
                     <InfoCard
                        key={id}
                        year={year}
                        place={place}
                        position={position}
                        descr={descr}
                     />
                  ))}
               </div>
            </div>

            <div className="exp-section">
               <SectionTitle>Experience</SectionTitle>
               <div className="cards-wrap">
                  {exp.map(({ id, position, year, descr, place }) => (
                     <InfoCard
                        key={id}
                        year={year}
                        place={place}
                        position={position}
                        descr={descr}
                     />
                  ))}
               </div>
            </div>
         </Container>
      </RoadMapSection>
   );
};

export { RoadMap };
