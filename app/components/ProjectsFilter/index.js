import React from 'react';

import { FilterNav } from './style';
import { filters } from './mock';

const ProjectsFilter = ({ selectedFilter, onFilterChange, projectsLength }) => {
   return (
      <FilterNav>
         <nav>
            <ul>
               {filters.map(({ id, title, filter }) => (
                  <li key={id}>
                     <button
                        className={selectedFilter === filter ? 'active' : ''}
                        onClick={() => onFilterChange(filter)}
                     >
                        {title}
                     </button>
                  </li>
               ))}
            </ul>
         </nav>

         <span>
            {projectsLength === 1
               ? projectsLength + ' project'
               : projectsLength + ' projects'}
         </span>
      </FilterNav>
   );
};

export { ProjectsFilter };
