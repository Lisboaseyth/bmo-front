import styled from "styled-components";

export const DivFlex = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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

export const DivP = styled.div`

    .pLength{
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;

            color: #F8F9FA;
        }

`