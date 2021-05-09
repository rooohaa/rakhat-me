import styled from 'styled-components';

const FactsSection = styled.section`
   padding: 50px 0 80px 0;

   div.facts-wrap {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 30px;

      div.fact-card {
         border: 2px solid #e5e5e5;
         border-radius: 8px;
         padding: 30px 0;

         display: flex;
         align-items: center;
         flex-direction: column;

         transition: all 0.3s ease;

         &:hover {
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            transform: translateY(-5px);
         }

         & > div {
            width: 35px;
            height: 35px;
            margin-bottom: 13px;

            img {
               width: 100%;
               height: 100%;
               object-fit: contain;
            }
         }

         h5 {
            color: #333;
            font-size: 16px;
            line-height: 24px;

            margin-bottom: 13px;
         }

         span {
            color: #d5d5d5;
            font-size: 48px;
            line-height: 54px;
         }
      }
   }
`;

export { FactsSection };
