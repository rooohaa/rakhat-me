import styled from 'styled-components';

const PageTitleBlock = styled.div`
   background-color: #fcfcfc;
   border-top: 2px solid #eee;
   border-bottom: 2px solid #eee;

   position: relative;

   padding: 60px 0;

   h2 {
      font-size: 40px;
      line-height: 48px;
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
