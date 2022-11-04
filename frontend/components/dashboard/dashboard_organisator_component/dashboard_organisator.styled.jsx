import styled from "styled-components";
import { keyframes } from "styled-components"

const popIn = keyframes`
0% { opacity: 0; transform: scale(0.5); }
100% { opacity: 1; transform: scale(1); }
`;

export const GoBackButton = styled.button`
width: 50px;
height: 50px;
border: none;
margin-left: 20px;
border-radius: 100%;
background-color:#54D2FD ;

&:hover{
    background-color:#2b6c82;
    cursor: pointer;
  }
`



export const Main = styled.div`
margin: 50px;
font-family: "Comfortaa", cursive;
animation: ${popIn} 0.5s;

`