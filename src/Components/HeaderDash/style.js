import styled from "styled-components";

export const HeaderDashPage = styled.header`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   padding: 0 20px;
   margin: 30px 0;

   font-family: "Inter";

   width: -webkit-fill-available;

   .logoBmo{
        width: 100px;
    }

   .h2Title {
     color: #ff577f;
   }

   .btnLogout {
     padding: 0px 16.2426px;
     gap: 10.15px;

     background: #212529;
     border-radius: 4px;
     color: #ffffff;
     border: transparent;

     height: 40px;
     width: 70px;

     cursor: pointer;

     font-style: normal;
     font-weight: 600;
     font-size: 12px;
     line-height: 28px;
   }
`;