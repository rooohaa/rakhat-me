import styled from 'styled-components';

const ProjectCardWrap = styled.div`
   width: 373px;
   border-radius: 15px;
   box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

   div.project-img {
      width: 100%;
      height: 170px;

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
      padding: 17px 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h4 {
         font-size: 22px;
         line-height: 26px;
         color: #333;
         margin-bottom: 9px;
      }

      p,
      span {
         font-size: 13px;
         line-height: 17px;
      }

      p {
         margin-bottom: 10px;
         line-height: 20px;
         color: #222;
      }

      span {
         font-weight: 500;
         display: block;
         color: #aaa;
         margin-bottom: 20px;
      }

      a.more-link {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 160px;
         height: 38px;
         border-radius: 5px;
         border: 1px solid #54ca95;

         color: #54ca95;
         font-weight: 700;
         font-size: 14px;
         transition: all 0.3s ease-out;

         &:hover {
            color: #fff;
            background-color: #54ca95;
         }
      }
   }
`;

export { ProjectCardWrap };
