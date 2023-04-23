import styled from "styled-components";

export const DivAllDash = styled.div`
  width: 100%;
  height: max-content;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;

  .container{
    width: 80%;
  }
`

export const MainDash = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Inter";

  width: 100%;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    margin-left: 20px;

    color: #ffffff;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    margin-left: 20px;

    color: #868e96;
  }

  .divProfile{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border-bottom: 0.3px solid #212529;
    border-top: 0.3px solid #212529;

    padding: 45px 0;
    margin-bottom: 30px 0;

    width: 100%;

  }

  .divBody{
    display: none;
  }

  @media (min-width: 600px) {

    .divProfile{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        p{
          margin-right: 20px;
        }
    }

    .divBody{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        width: 100%;

        margin-top: 30px;

    }
  }

`;
