import styled from "styled-components";

export const LiCard = styled.button`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: -webkit-fill-available;

    border-radius: 4px;
    border: transparent;

    background: #121214;
    color: #FFFFFF;

    padding: 0 20px;

    margin: 10px 0;

    cursor: pointer;

    :hover{
        background: #343B41;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14.21px;
        line-height: 22px;
    }


`