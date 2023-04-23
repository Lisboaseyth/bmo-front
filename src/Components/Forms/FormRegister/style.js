import styled from "styled-components";

export const DivHeader = styled.header`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 30px;

    .logoBmo{
        width: 100px;
    }

    .btnReturn{
        padding: 0px 16.2426px;
        gap: 10.15px;

        background: #212529;
        border-radius: 4px;
        color: #FFFFFF;

        height: 40px;
        width: 70px;

        cursor: pointer;

        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 28px;
    }

`

export const FormStyled = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 33.5803px 17.5897px;
    gap: 17.59px;

    width: 100%;

    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;

    color: #FFFFFF;
    font-family: 'Inter';

    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 14.3916px;
        line-height: 22px;
    }

    span{
        font-style: normal;
        font-weight: 400;
        font-size: 9.59437px;
        line-height: 18px;

        color: #868E96;
    }

    label{
        font-style: normal;
        font-weight: 400;
        font-size: 9.73988px;
        line-height: 0px;

        margin-bottom: 15px;
    }

    input, select{
        padding: 0px 12.9865px;
        gap: 8.12px;

        background: #343B41;
        color: #868E96;
        border: 0.973988px solid #343B41;
        border-radius: 3.19812px;

        margin-bottom: 20px;
        box-sizing: border-box;

        height: 40px;
        width: 100%;
    }

    .divAlignText{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .divAlignInputs{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        width: 100%;

        p{
            font-size: 10px;
            color: red;
            margin: -15px 0 20px 0;
        }

    }
`