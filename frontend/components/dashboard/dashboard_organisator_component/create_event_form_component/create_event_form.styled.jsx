import styled from "styled-components";
import { keyframes } from "styled-components";

const FadeIn = keyframes`
0% { opacity: 0;  }
100% { opacity: 1; }
`;
export const Main = styled.div`
  display: flex;
  padding: 5px;
  animation: ${FadeIn} 2s;
  font-family: "Comfortaa", cursive;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GoBackButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  margin-left: 20px;
  border-radius: 100%;
  background-color: #7e62e2;

  &:hover {
    background-color: #3f2c83;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  padding-right: 20%;
  margin-bottom: -10px;
  color: #ffff !important;
`;

export const BoxForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
  width: 25%;
  color: white;

  @media (max-width: 700px) {
    width: 80%;
  }
`;
export const Label = styled.label`
  align-self: flex-start;
  color: white;
`;

export const InputForm = styled.input`
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  width: 100%;
  height: 25%;
  border-radius: 5px;
  outline: none;
  background-color: grey;
  color: white;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.8rem;
    color: whitesmoke;
    font-family: "Comfortaa", cursive;
  }
`;

export const DescriptionInput = styled.textarea`
  padding: 10px;
  margin: 10px;
  width: 100%;
  min-width: 100%;
  max-height: 400px;
  font-weight: bold;
  resize: none;
  height: 25%;
  border-radius: 5px;
  outline: none;
  background-color: grey;
  color: white;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.8rem;
    color: whitesmoke;
    font-family: "Comfortaa", cursive;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #7e62e2;
  border-radius: 10px;
  height: 5vh;
  border: none;
  color: white;
  font-weight: bold;
  margin: 10px;
  padding: 10px 5px;
  font-family: "Comfortaa", cursive;
  &:hover {
    background-color: #3f2c83;
    cursor: pointer;
  }
`;

export const ArtistSelect = styled.select`
  padding: 10px;
  margin: 10px;
  width: 100%;
  font-weight: bold;
  height: 25%;
  border-radius: 5px;
  outline: none;
  background-color: grey;
  color: white;
  border: none;
  font-family: "Comfortaa", cursive;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.8rem;
    font-family: "Comfortaa", cursive;
    color: whitesmoke;
  }
`;

export const TypeSelect = styled.select`
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 25%;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
  background-color: grey;
  color: white;
  font-family: "Comfortaa", cursive;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.8rem;
    font-family: "Comfortaa", cursive;
    color: whitesmoke;
  }
`;

export const ErrorField = styled.div`
  color: "red";
  background-color: red;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  font-weight: 500;
  animation: ${FadeIn} 1s;
`;
