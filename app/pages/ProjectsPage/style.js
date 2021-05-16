import { ProjectCardWrap } from 'app/components/ProjectCard/style';
import styled from 'styled-components';

const ProjectsSection = styled.section`
   padding: 65px 0;

   div.projects-wrap {
      ${ProjectCardWrap} {
         &:last-child {
            border-bottom: none;
         }
      }
   }
`;

export { ProjectsSection };
