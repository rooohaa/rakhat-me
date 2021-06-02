import styled from 'styled-components';

const ProjectCardWrap = styled.div`
   width: 330px;
   border-radius: 4px;
   box-shadow: 0 1px 4px 0px rgb(0 0 0 / 20%);
   padding: 8px;

   transition: all 0.4s ease-out;

   &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   }

   div.project-img {
      width: 100%;
      height: 180px;

      img {
         user-select: none;
         pointer-events: none;
         border-radius: 4px;
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   div.project-info {
      padding: 10px 6px 3px 6px;
      display: flex;
      flex-direction: column;

      h4 {
         font-size: 18px;
         line-height: 22px;
         font-weight: 700;
         color: #333;
         margin-bottom: 5px;
      }

      span {
         font-size: 13px;
         line-height: 17px;
         font-weight: 500;
         display: block;
         color: #777;
         margin-bottom: 5px;
      }

      a.more-link {
         color: #09c;
         font-size: 14px;
         line-height: 16px;

         align-self: flex-end;

         &:hover {
            text-decoration: underline;
         }

         img {
            width: 100%;
            height: 100%;
            object-fit: contain;
         }
      }
   }
`;

export { ProjectCardWrap };
