import styled from 'styled-components';

const FilterNav = styled.div`
   padding-bottom: 15px;
   border-bottom: 1px solid #eee;
   display: flex;
   align-items: center;
   justify-content: space-between;

   span {
      font-size: 14px;
      line-height: 19px;
      color: #aaa;
   }

   nav {
      width: 30%;
   }

   ul {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
         background: transparent;
         border: none;
         font-size: 14px;
         line-height: 19px;
         color: #333;
         cursor: pointer;

         padding: 3px 6px;
         border-radius: 4px;
         transition: all 0.1s ease;

         &.active {
            border: 1px solid #54ca95;
            color: #54ca95;
            font-weight: 700;
         }
      }
   }
`;

export { FilterNav };
