import styled from 'styled-components';

const DetailsWrapper = styled.section`
   padding: 65px 0;

   h4.proj-heading {
      font-size: 17px;
      line-height: 24px;
      color: #333;
      margin-bottom: 15px;
   }

   a.back-link {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      width: 150px;

      img {
         width: 20px;
         height: 20px;
         object-fit: contain;
         margin-right: 7px;
      }

      span {
         font-size: 14px;
         line-height: 19px;
         color: #09c;
         font-weight: 500;
      }
   }

   div.details-box {
      margin: 10px;
      width: 100%;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
         rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      padding: 30px;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      div.project-screen {
         width: 60%;
         height: 400px;
         border-radius: 10px;

         img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
         }
      }

      div.project-descr {
         width: 38%;
         padding: 25px;
         border: 2px solid #eee;
         border-radius: 10px;

         div.info {
            margin-bottom: 25px;

            & > div {
               display: flex;
               align-items: center;

               margin-bottom: 20px;

               img {
                  width: 17px;
                  height: 17px;
                  object-fit: contain;
                  margin-right: 13px;
               }

               span,
               a {
                  font-size: 14px;
                  line-height: 19px;
               }

               span {
                  color: #666;
               }

               a {
                  color: #09c;
               }
            }

            p {
               color: #666;
               font-size: 14px;
               line-height: 21px;
            }
         }

         div.tech {
            ul {
               display: flex;
               align-items: center;
               flex-wrap: wrap;
               row-gap: 7px;
            }
         }
      }
   }
`;

export { DetailsWrapper };
