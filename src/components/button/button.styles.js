import styled from "styled-components";

export const Button = styled.button`
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #ec0e85;
    box-sizing: border-box;
    width: ${props => props.customwidth};
    height: ${props => props.customheight};

    color: #ec0e85;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    -webkit-clip-path: polygon(0 0, 92% 0, 100% 10%, 100% 80%, 100% 100%, 9% 100%, 0 89%, 0% 20%);
    clip-path: polygon(0 0, 92% 0, 100% 10%, 100% 80%, 100% 100%, 9% 100%, 0 89%, 0% 20%);

    &:hover{
        border: 1px solid #edce00;
        color:#edce00 ;
        transition: 0.6s;
    }
`