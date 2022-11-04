import styled from 'styled-components';
import { keyframes } from 'styled-components';

const popIn = keyframes`
0% { opacity: 0; transform: scale(0.5); }
100% { opacity: 1; transform: scale(1); }
`;

export const Main = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161618;
  font-family: "Comfortaa", cursive;

`;



export const ChoiceButton = styled.button`
border: none;
width:38vw;
margin: 4vw;
padding: 50px;
border-radius: 20px;
background-color: #6c4ed8;
justify-items: center;
height: 25vh;
animation: ${popIn} 0.5s;
&:hover{
    background-color:#a68dfa;
    cursor: pointer;
  }

`;


export const Button = styled.button`
  width: 50%;
  background-color: #6c4ed8;
  border-radius: 10px;
  height: 5vh;
  border:none;
  color:white;
  font-weight: bold;
  margin: 10px;

  &:hover{
    background-color:#a68dfa;
    cursor: pointer;
  }
`;

export const GoBackButton = styled.button`
width: 50px;
height: 50px;
margin-top:10vh;
margin-bottom:5vh;
border: none;
margin-left: 20px;
border-radius: 100%;
background-color:#6c4ed8 ;

&:hover{
    background-color:#a68dfa;
    cursor: pointer;
  }
`

export const ChoiceButtonLabel = styled.a`
font-size: large;
color: #ede5e5;
font-weight: bold;
margin-top: 5%;
font-family: "Comfortaa", cursive;


`

export const Row = styled.div`
display:flex;
justify-content: center;
`

export const GoBackRow = styled.div`
padding:10px;
margin-top:10px
background-color: #161618;
`


export const Col = styled.div`
flex:1;
`