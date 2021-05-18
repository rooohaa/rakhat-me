import styled from 'styled-components';

const CardWrapper = styled.div`
   padding: 49px 0 17px 21px;
   border-left: 1px solid #f5f6f9;
   border-bottom: 1px solid #f5f6f9;

   position: relative;

   div.card-head {
      display: flex;
      align-items: center;
      position: absolute;
      top: 10px;
      left: -2%;

      div {
         display: flex;
         align-items: center;
         justify-content: center;
         border: 2px solid #54ca95;
         background-color: #fff;
         border-radius: 30px;
         font-size: 12px;
         font-weight: 500;
         padding: 3px 8px;
         margin-right: 7px;
      }

      span {
         font-size: 12px;
         color: #666;
         opacity: 0.7;
      }
   }

   h4 {
      font-size: 16px;
      line-height: 21px;
      color: #333;
      margin-bottom: 8px;
   }

   p {
      font-size: 13px;
      line-height: 19px;
      color: #666;
   }
`;

export { CardWrapper };
