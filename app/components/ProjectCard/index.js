import React from 'react';

import { ProjectCardWrap } from './style';

import Link from 'next/link';

const ProjectCard = (props) => {
   const { id, imgPath, title, descr, tags } = props;

   return (
      <ProjectCardWrap>
         <div className="project-img">
            <img src={imgPath} alt={title} />
         </div>

         <div className="project-info">
            <h4>{title}</h4>
            <p>{descr}</p>
            <span>{tags}</span>
            <Link href={'/projects/' + id}>
               <a className="more-link">More Details</a>
            </Link>
         </div>
      </ProjectCardWrap>
   );
};

export { ProjectCard };
