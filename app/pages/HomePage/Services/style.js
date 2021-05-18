import styled from 'styled-components';

const ServicesSection = styled.section`
   padding: 50px 0;

   div.services-wrap {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;

      div.card {
         display: flex;
         align-items: flex-start;

         div.icon-wrap {
            width: 35px;
            height: 35px;
            padding-top: 3px;

            img {
               width: 35px;
               height: 35px;
               object-fit: contain;
            }
         }

         div.descr-wrap {
            margin-left: 25px;

            h4 {
               color: #333;
               font-size: 17px;
               line-height: 24px;
            }

            p {
               margin-top: 7px;
               font-size: 13px;
               color: #666;
               line-height: 21px;
               font-weight: 400;
            }
         }
      }
   }
`;

export { ServicesSection };
