import styled from 'styled-components';

const FormWrapper = styled.div`
   div.form-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;

      margin-bottom: 25px;
   }

   div.form-control {
      display: flex;
      flex-direction: column;

      input {
         margin-bottom: 20px;

         &:last-child {
            margin-bottom: 0;
         }
      }
   }

   input,
   textarea {
      border-radius: 5px;
      border: 2px solid #bfbfbf;
      padding: 9px 12px;

      &::placeholder {
         font-weight: 500;
         color: #adadac;
      }

      &:focus {
         border: 2px solid #54cb95;
      }
   }

   textarea {
      height: 100%;
      resize: none;
   }

   button[type='submit'] {
      padding: 7px 25px;
      border-radius: 30px;
      border: 2px solid #54cb95;
      color: #222;
      background-color: #fff;
      font-size: 14px;
      cursor: pointer;
      transition: color, background-color 0.3s ease;

      &:hover {
         color: #fff;
         background-color: #54cb95;
      }
   }

   div.message {
      padding: 10px 17px;
      border-radius: 4px;
      margin-bottom: 16px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 1px solid transparent;

      animation: slideDown 0.4s ease;

      &.success {
         border-color: #c3e6cb;
         background-color: #d4edda;

         span {
            color: #155724;
         }
      }

      &.error {
         border: 1px solid #df4759;
         background-color: #f8d7da;
      }

      span {
         font-size: 14px;
      }

      button {
         border: none;
         cursor: pointer;
         width: 25px;
         height: 25px;
         background-color: inherit;

         display: flex;
         align-items: center;
         justify-content: center;
         font-size: 26px;
         font-weight: bold;
         color: #333;
         opacity: 0.8;
      }
   }

   @keyframes slideDown {
      from {
         opacity: 0;
         transform: translateY(-40px);
      }
      to {
         opacity: 1;
         transform: translateY(0);
      }
   }
`;

export { FormWrapper };
