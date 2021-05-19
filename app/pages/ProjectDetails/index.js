import React from 'react';

import { TechTag } from 'app/components';
import { Container } from 'app/sc/Container';

import { DetailsWrapper } from './style';

import Link from 'next/link';

const DetailsComponent = ({ project }) => {
   return (
      <DetailsWrapper>
         <Container>
            <Link href="/projects">
               <a className="back-link">
                  <img src="/icons/arrow-left.svg" alt="Arrow left icon" />
                  <span>Back to projects</span>
               </a>
            </Link>
            <div className="details-box">
               <div className="project-screen">
                  <img src={project.imgPath} alt={project.title} />
               </div>

               <div className="project-descr">
                  <div className="info">
                     <h4 className="proj-heading">Description</h4>
                     <div>
                        <img src="/icons/global.svg" alt="Icon" />
                        {project.demoLink ? (
                           <a href={project.demoLink} target="_blank">
                              Demo
                           </a>
                        ) : (
                           <span>Not deployed</span>
                        )}
                     </div>
                     <div>
                        <img src="/icons/calendar.svg" alt="Icon" />
                        <span>{project.date}</span>
                     </div>
                     <div>
                        <img src="/icons/github.svg" alt="Icon" />
                        <a href={project.githubLink} target="_blank">
                           Source Code
                        </a>
                     </div>
                     <p>{project.description}</p>
                  </div>

                  <div className="tech">
                     <h4 className="proj-heading">Technology</h4>

                     <ul>
                        {project.tech.map((tag, idx) => (
                           <TechTag key={idx} tag={tag} />
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </Container>
      </DetailsWrapper>
   );
};

export { DetailsComponent };
