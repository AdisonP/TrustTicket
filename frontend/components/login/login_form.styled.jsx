import styled from "styled-components";
import { keyframes } from "styled-components";

const FadeIn = keyframes`
0% {opacity: 0;}
100% {opacity:1}

`;

export const Main = styled.div`
  font-family: "Comfortaa", cursive;

  padding-top: 40px;
  padding-bottom: 40px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161618;
  animation: ${FadeIn} 1.5s;
`;

export const BoxForm = styled.div`
  margin-top: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
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
  color: white;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Comfortaa", cursive;

    font-size: 0.8rem;
    color: whitesmoke;
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
  width: 50%;
  background-color: #6c4ed8;
  border-radius: 10px;
  height: 10vh;
  border: none;
  color: white;
  font-weight: bold;
  font-family: "Comfortaa", cursive;

  margin: 10px;
  &:hover {
    background-color: #a68dfa;
    cursor: pointer;
  }
`;
