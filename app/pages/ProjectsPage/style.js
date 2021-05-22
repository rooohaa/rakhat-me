import styled from 'styled-components';

const ProjectsSection = styled.section`
   padding: 65px 0;

   div.projects-wrap {
      margin: 50px 0 30px 0;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 30px 28px;
      flex-wrap: wrap;

      @media screen and (max-width: 1024px) {
         justify-content: center;
      }
   }
`;

export { ProjectsSection };
