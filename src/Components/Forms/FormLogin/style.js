import styled from "styled-components";

export const ContentAll = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 33.5803px 17.5897px;
    gap: 17.59px;

    width: 80%;
    max-height: 400px;

    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;

    color: #FFFFFF;
    font-family: 'Inter';

    
    .btnRegister{
        background: #868E96;
        color: #FFFFFF;

        border: 1.2182px solid #868E96;
        border-radius: 4px;

        width: 100%;
        height: 40px;

        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;

        cursor: pointer;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    .btnRegister:hover{
        background: #343B41;
        border: transparent;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    @media (min-width: 600px) {

        width: 100%;

    }

`

export const LoginForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
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
        font-size: 12.182px;
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

    .btnEntrar{
        padding: 0px 22.3336px;
        gap: 10.15px;
        height: 40px;
        width: 100%;

        background: #00128A;
        color: #FFFFFF;
        
        border: 1.2182px solid #00128A;
        border-radius: 4px;

        cursor: pointer;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    .btnEntrar:hover{
        background: #0055FF;        
        
        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
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

    .pText{
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;

        color: #868E96;
    }

`