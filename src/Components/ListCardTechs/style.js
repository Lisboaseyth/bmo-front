import styled from "styled-components";

export const UlList = styled.ul`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    max-height: 300px;

    overflow: auto;

    border: 5px solid #212529;
    background: #212529;
    border-radius: 4px;

    padding: 20px;

    width: -webkit-fill-available;

    ::-webkit-scrollbar {
        width:10px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background:#333;
    }
    ::-webkit-scrollbar-thumb {
        background: #121214;
    }

`

