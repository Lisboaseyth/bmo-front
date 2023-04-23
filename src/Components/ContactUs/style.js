import styled from "styled-components";

export const SectionContact = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    /* min-height: 105vh; */
    padding-bottom: 60px;

    font-family: 'Quicksand', sans-serif;
    
    h1{
        color: white;
        font-weight: 400;

        font-size: 30px;
    }

    strong {
        color: #0055FF;
    }

`

export const FormContact = styled.form`

    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    .inputContent {
        width: 90%;
    }

    .divInput {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
        width: 100%;
        height: 50px;

        input {

            background-color: #09090a;

            border: 5px solid #09090a;

            padding: 0;

            border: 0 5px solid rgba(66,65,65,0);
            border-radius: 8px;

            color: #fff;

            width: 100%;
            height: 30px;

            max-width: 100%;
            min-width: 100%;

            /* outline: none; */
            
        }

        textArea {

            background-color: #09090a;

            border: 5px solid #09090a;

            border-radius: 8px;
            color: #fff;

            padding: 0;

            width: 100%;
            height: 50px;

            max-width: 100%;
            min-width: 100%;

            outline: none;

        }

    }

    .divInputContact {

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 20px;
        position: relative;
        width: 100%;

        input {

            background-color: #09090a;

            border: 5px solid #09090a;

            padding: 0;

            border: 0 5px solid rgba(66,65,65,0);
            border-radius: 8px;

            color: #fff;

            width: 100%;
            height: 30px;

            max-width: 100%;
            
        }

        .subDivs {
            display: flex;
            flex-direction: column;
            width: 100%;

            input {
                width: 90%;
            }

        }

        .inputEmail {
            margin-bottom: 15px;
        }

        @media (min-width: 400px) {
        
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        

            input {
                width: 45%;
            }

            .inputEmail {
                margin-bottom: 0;
            }

        }

    }

    .pError {

        font-family: 'Quicksand';
        font-style: normal;
        font-weight: 600;
        font-size: 8px;
        line-height: 16px;

        color: #E60000;

        margin: 0;

    }

    .btnSubmit {
        
        width: 90%;
        height: 60px;

        cursor: pointer;

        font-family: 'Quicksand', sans-serif;

        background-color: #0055FF;
        color: white;

        border-radius: 5px;
        border: none;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;

    }


    .btnSubmit:hover {

        background-color: white;

        color: #0055FF;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    

`