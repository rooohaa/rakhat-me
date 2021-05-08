import styled from 'styled-components';
import { Container } from '../../sc/Container';

const HeaderSection = styled.header`
   padding: 30px 0;

   ${Container} {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   a.logo {
      display: flex;
      align-items: center;

      img {
         width: 50px;
         height: 50px;
         object-fit: cover;

         margin-right: 7px;
      }

      span {
         font-size: 18px;
         line-height: 28px;
         font-weight: 700;
         color: #000;
      }
   }

   nav {
      width: 40%;
   }

   nav > ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
         color: #8f8f8f;
         font-size: 15px;
         line-height: 17px;
         font-weight: 300;

         transition: color 0.3s ease-out;

         &:hover {
            color: #000;
         }

         &:hover::after {
            width: 100%;
         }

         &::after {
            content: '';
            display: block;
            width: 0%;
            transition: width 0.3s ease-out;
            height: 2px;
            background-color: #54ca95;
         }

         &.active {
            color: #000;
            font-weight: 500;

            &::after {
               width: 100%;
            }
         }
      }
   }
`;

export { HeaderSection };
