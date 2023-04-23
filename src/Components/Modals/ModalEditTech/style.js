import styled from "styled-components";

export const ModalBodyEdit = styled.div`

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

export const FormModalEdit = styled.form`

        width: 35%;
        min-width: 15.625rem;
        border-radius: 0.25rem; 

        background-color: #212529;

`

export const DivHeaderEdit = styled.div`

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
export const DivItensEdit = styled.div`

        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

`

export const DivModalInputsEdit = styled.div`

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
        width: 98%;
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

export const DivBtn = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const BtnModalSubmitEdit = styled.button`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10.15px;
        height: 50px;
        width: 100%;
        margin: 15px 10px 0 0;

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

export const BtnModalDelete = styled.button`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10.15px;
        height: 50px;
        width: 100%;
        margin-top: 15px;

        background: #868E96;
        color: #FFFFFF;
        
        border: 1.2182px solid #868E96;
        border-radius: 4px;

        cursor: pointer;


    :hover{
        background: #343B41;
        border: 1.2182px solid #343B41;
    }

`