import styled from "styled-components";

export const ModalBody = styled.div`

    width: 100vw;
    height: 100vh;
    background-color:rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const DivHeader = styled.div`

        display: flex;
        justify-content: space-between;
        background-color: #343B41;
        padding: 0 1rem;
        border-radius: 0.25rem 0.25rem 0 0 ;

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;

        color: #F8F9FA;
    }

    button{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;

        background: transparent;
        border: transparent;
        color: #868E96;

        cursor: pointer;
    }

`

export const DivFlex = styled.div`

    display: flex;
    flex-direction: column;


`

export const DivAlignHeader = styled.div`


    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: -webkit-fill-available;

    font-family: 'Inter';
    
    h3{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;

        color: #F8F9FA;
    }

    button{
        width: 35px;
        height: 35px;
        border-radius: 4px;
        border: transparent;

        cursor: pointer;

        font-weight: 700;
        font-size: 20px;
        
        background: #212529;
        color: #FFFFFF;
    }

`

export const DivModalInputs = styled.div`

        display: flex;
        flex-direction: column;

    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 0px;

        color: #FFFFFF;

        margin: 20px 0;
    }

    input, select{
        width: 100%;
        height: 48px;
        
        border: 1.2182px solid #F8F9FA;
        border-radius: 4px;

        background: #343B41;
        color: #FFFFFF;

    }

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 0px;

        color: red;

        margin-top: 15px;
    }

`

export const FormModal = styled.form`

        width: 35%;
        min-width: 15.625rem;
        border-radius: 0.25rem; 

        background-color: #212529;

`

export const DivItens = styled.div`

        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

`

export const BtnModalSubmit = styled.button`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10.15px;
        height: 50px;
        width: 100%;
        margin-top: 15px;

        background: #00128A;
        color: #FFFFFF;
        
        border: 1.2182px solid #00128A;
        border-radius: 4px;

        cursor: pointer;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;


    :hover{
        background: #0055FF;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

`

