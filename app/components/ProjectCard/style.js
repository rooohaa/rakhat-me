import styled from 'styled-components';

const ProjectCardWrap = styled.div`
   padding: 35px 0;
   width: 100%;
   border-bottom: 1px solid #ccc;

   display: flex;
   align-items: flex-start;

   div.project-img {
      width: 70%;
      height: 350px;

      margin-right: 35px;
      border-radius: 10px;

      img {
         user-select: none;
         pointer-events: none;
         border-radius: 10px;
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   div.project-info {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h4 {
         font-size: 26px;
         line-height: 32px;
         color: #333;
         margin-bottom: 9px;
      }

      p,
      span {
         font-size: 14px;
         line-height: 18px;
      }

      p {
         margin-bottom: 10px;
         line-height: 21px;
         color: #222;
      }

      span {
         font-weight: 500;
         display: block;
         color: #aaa;
         margin-bottom: 30px;
      }

      a.more-link {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 200px;
         height: 40px;
         border-radius: 5px;
         border: 1px solid #54ca95;

         color: #54ca95;
         font-weight: 700;
         transition: all 0.3s ease-out;

         &:hover {
            color: #fff;
            background-color: #54ca95;
         }
      }
   }
`;

export { ProjectCardWrap };
