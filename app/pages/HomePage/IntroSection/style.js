import styled from 'styled-components';
import { Container } from 'app/sc/Container';

const IntroWrapper = styled.section`
   padding: 80px 0;

   ${Container} {
      display: flex;
      align-items: center;
      justify-content: center;

      padding-top: 10px;
      padding-bottom: 10px;
   }

   div.photo {
      border: 15px solid #fff;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
         rgba(0, 0, 0, 0.23) 0px 3px 6px;
      width: 385px;
      height: 385px;

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 50%;
         transition: transform 0.3s ease-out;
      }
   }

   div.descr {
      width: 560px;
      margin-left: 50px;

      span {
         color: #b3b3b3;
         display: block;
         margin-bottom: 7px;
         font-size: 16px;
         line-height: 24px;
         font-weight: 300;
      }

      h1 {
         font-size: 48px;
         line-height: 56px;
         color: #333;
         margin-bottom: 20px;
      }

      p {
         font-size: 14px;
         line-height: 24px;
         color: #666;
         margin-bottom: 30px;
      }

      a.link {
         color: #222;
         border-radius: 30px;
         padding: 9px 25px;
         font-size: 13px;
         transition: all 0.4s ease;

         &.l-green {
            border: 2px solid #54ca95;
            margin-right: 10px;

            &:hover {
               background-color: #54ca95;
               color: #fff;
            }
         }

         &.l-gray {
            border: 2px solid #d5d5d5;

            &:hover {
               background-color: #d5d5d5;
               color: #fff;
            }
         }
      }
   }
`;

export { IntroWrapper };
