import styled from "styled-components";

export const HeaderStyled = styled.header`

    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    width: 100%;
    height: 80px;
    
    display: flex;

    border-radius: 0 0 30px 30px;

    /* position: fixed;
    z-index: 100; */

    font-family: 'Quicksand', sans-serif;

    nav {

        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 0 30px;
        
    }

    nav a {

        cursor: pointer;

        color: #444444;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }

    nav a:hover {

        color: #0055FF;

        -webkit-transition: 0.3s ease-out;
        -moz-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
    }


    .drawler {
        display: flex;
        border: none;
        background: none;

        cursor: pointer;
    }

    .menuFlex {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        background-color: white;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        padding: 20px;

        border-radius: 15px;

        a {
            cursor: pointer;
        }

        .divA {
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .menuFlex a {
        display: flex;
        align-items: center;

        margin-bottom: 20px;

        text-decoration: none;

    }

    @media (min-width: 800px) {
        .drawler {
            display: none;
        }
    }

`

export const ListUlHeader = styled.ul`

    display: none;

    a {
        cursor: pointer;
    }


    @media (min-width: 800px) {
    
        display: flex;
        align-items: center;
        justify-content: center;

        list-style: none; 

        a {
            text-decoration: none; 
            margin: 0 10px;
        } 

    }

`

export const IconBmo = styled.img`

    width: 100px;

`