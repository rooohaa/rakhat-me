import { Container } from 'app/sc/Container';
import styled from 'styled-components';

const ContactSection = styled.section`
   padding: 70px 0;

   ${Container} {
      display: grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 30px;
   }

   div.map {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 12px;
      margin-bottom: 50px;
   }

   div.contact-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & > div {
         display: flex;
         align-items: center;

         margin-bottom: 40px;

         &:last-child {
            margin-bottom: 0;
         }

         img {
            width: 35px;
            height: 35px;
            object-fit: contain;

            margin-right: 20px;
         }

         h5 {
            font-size: 16px;
            line-height: 24px;
            color: #333;
         }
      }
   }
`;

export { ContactSection };
