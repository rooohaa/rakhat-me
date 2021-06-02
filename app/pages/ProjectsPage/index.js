import React, { useState } from 'react';

import { ProjectsFilter, ProjectCard } from 'app/components';
import { Container } from 'app/sc/Container';

import { ProjectsSection } from './style';

import { projects } from 'projects';

const ProjectsPageComponent = () => {
   const [filter, setFilter] = useState('all');

   const filteredProjects = projects.filter((project) => {
      const filterKeys = project.filterKeys.split(',');

      if (filterKeys.includes(filter)) {
         return project;
      }
   });

   const handleFilter = (triggeredFilter) => setFilter(triggeredFilter);

   return (
      <ProjectsSection>
         <Container>
            <ProjectsFilter
               selectedFilter={filter}
               onFilterChange={handleFilter}
               projectsLength={filteredProjects.length}
            />
            <div className="projects-wrap">
               {filteredProjects.map(({ id, title, imgPath, tags }) => (
                  <ProjectCard
                     key={id}
                     id={id}
                     title={title}
                     imgPath={imgPath}
                     tags={tags}
                  />
               ))}
            </div>
         </Container>
      </ProjectsSection>
   );
};

export { ProjectsPageComponent };
