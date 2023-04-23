import styled from "styled-components";

export const DivAlignForm = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0;

    width: 70%;
    height: max-content;
    min-height: 100vh;

    @media (min-width: 600px) {

        width: 40%;
        
    }

    @media (min-width: 1090px) {

        width: 27%;
        
    }

`