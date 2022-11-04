import styled from "styled-components";
import { keyframes } from 'styled-components'

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity:1}

`

export const Main = styled.div`
  padding-bottom: 10vh;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161618;
  animation: ${FadeIn} 1.5s;
  
`;
export const BoxForm = styled.div`
  
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
display:flex;
color:red;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  color: white;
`;

export const InputForm = styled.input`
 padding: 10px;
  margin: 10px;
  width: 100%;
  height: 8vh;
  border-radius: 5px;
  outline: none;
  background-color: grey;
  color:white;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.8rem;
    color: whitesmoke;
    font-family: "Comfortaa", cursive;

  }
`;

export const InputFormError = styled.input`
  border-color: red;
  width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
 width: 100%;
  background-color: #6c4ed8;
  border-radius: 10px;
  height: 10vh;
  border:none;
  color:white;
  font-weight: bold;
  margin: 10px;
  font-family: "Comfortaa", cursive;

  &:hover{
    background-color:#a68dfa;
    cursor: pointer;
  }
`;

export const WalletAddress = styled.a`
margin-top: 30px;
color:white;
`

export const MetaMaskButton = styled.button`
width: 55vw;
 background-color: #fc8607;
 border-radius: 25px;
 height: 70px;
 border:none;
 padding-bottom: 2px;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 color:white;
 font-weight: bold;
 gap: 20px;
  justify-self:center
 &:hover{
   background-color:#7c4203;
   cursor: pointer;
 }
 &:disabled{
  background-color: grey;
 }
`;
