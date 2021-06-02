import styled from 'styled-components';

const ProjectsSection = styled.section`
   padding: 65px 0;

   div.projects-wrap {
      margin: 50px 0 30px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      row-gap: 30px;
      flex-wrap: wrap;

      @media screen and (max-width: 1024px) {
         justify-content: center;
      }
   }
`;

export { ProjectsSection };
