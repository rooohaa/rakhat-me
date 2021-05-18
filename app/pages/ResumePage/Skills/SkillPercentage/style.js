import styled from 'styled-components';

const SkillWrap = styled.div`
   div.head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 3px;

      h6 {
         font-size: 14px;
         line-height: 19px;
         color: #333;
      }

      span {
         color: #888;
         font-size: 12px;
         line-height: 17px;
      }
   }

   div.wrap {
      border: 2px solid #e5e5e5;
      border-radius: 8px;
      height: 12px;
      padding: 2px;

      div.inner {
         background-color: #54ca95;
         height: 100%;
         border-radius: 8px;
      }
   }
`;

export { SkillWrap };
