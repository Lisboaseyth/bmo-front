import styled from "styled-components";


export const DivPageLanding = styled.div`

    width: 100%;
    height: max-content;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0;

    footer {

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 30px;

        font-family: 'Quicksand';

        font-size: 14px;

        background-color: white;

        color: #0055FF;


    }

`

export const MainPage = styled.main`

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    font-family: 'Quicksand';

    width: 100%;
    
    img {
        width: 50%;

        @media (min-width: 600px) {
            display: flex;
        }

        @media (min-width: 710px) {
            width: 30%;
        }
    }

    h1 {


        text-align: center;

        color: white;

        font-weight: 400;
        font-size: 50px;

        strong {
            color: #0055FF;
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
        height: 88vh;
    }

`