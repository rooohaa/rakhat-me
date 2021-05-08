import styled from 'styled-components';
import { Container } from '../../sc/Container';

const FooterSection = styled.footer`
   padding: 15px 0;
   border-top: 2px solid #eee;
   background-color: #fcfcfc;

   ${Container} {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   nav {
      width: 35%;

      ul {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }

      a {
         color: #333;
         opacity: 0.6;
         font-size: 14px;
         line-height: 18px;
         transition: opacity 0.5s ease-out;

         &:hover {
            opacity: 1;
         }
      }
   }

   p {
      color: #aaa;
      font-size: 14px;
      line-height: 18px;
   }
`;

export { FooterSection };
