import styled from 'styled-components';

const SectionTitle = styled.h3`
   font-size: 21px;
   line-height: 28px;
   color: #333;
   position: relative;

   display: inline-block;
   margin-bottom: 30px;
   padding-bottom: 7px;

   &::before,
   ::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 2px;
      border-radius: 3px;
      background-color: #ccc;
   }

   &::after {
      background-color: #54ca95;
      right: 70px;
      z-index: 2;
   }
`;

export { SectionTitle };
