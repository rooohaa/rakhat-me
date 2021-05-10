import styled from 'styled-components';

const PageTitleBlock = styled.div`
   background-color: #fcfcfc;
   border-top: 2px solid #eee;
   border-bottom: 2px solid #eee;

   position: relative;

   padding: 65px 0;

   h2 {
      font-size: 44px;
      line-height: 52px;
      color: #333;
   }

   span {
      position: absolute;
      top: 20px;
      right: 130px;
      font-size: 14px;
      line-height: 18px;
      color: #aaa;
      font-weight: 300;
   }
`;

export { PageTitleBlock };
