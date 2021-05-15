import React from 'react';

import { SkillPercentage } from './SkillPercentage';
import { Container } from 'app/sc/Container';
import { SectionTitle } from 'app/sc/SectionTitle';

import { skills } from './mock';
import { SkillsWrapper } from './style';

const Skills = () => {
   return (
      <SkillsWrapper>
         <Container>
            <SectionTitle>Tech Skills</SectionTitle>

            <div className="skills-grid">
               {skills.map(({ id, title, percent }) => (
                  <SkillPercentage key={id} title={title} percent={percent} />
               ))}
            </div>
         </Container>
      </SkillsWrapper>
   );
};

export { Skills };
