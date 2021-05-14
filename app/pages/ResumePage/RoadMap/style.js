import styled from 'styled-components';
import { Container } from 'app/sc/Container';
import { CardWrapper } from './InfoCard/style';

const RoadMapSection = styled.section`
   padding: 65px 0;
   ${Container} {
      overflow: visible;

      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
   }

   div.cards-wrap {
      display: flex;
      flex-direction: column;

      ${CardWrapper} {
         &:last-child {
            border-bottom: none;
         }
      }
   }
`;

export { RoadMapSection };
