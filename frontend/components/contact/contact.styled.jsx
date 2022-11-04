import styled from "styled-components";

export const GlobalContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Comfortaa", cursive;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const LeftContainer = styled.div`
  width: 40%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    gap: 50px;
  }
`;

export const RightContainer = styled.div`
  width: 40%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 1.1rem;
`;

export const LittleTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin: 0%;
  font-weight: bold;

  @media (max-width: 1450px) {
    font-size: 1.2rem;
  }
`;

export const BigTitle = styled.h1`
  width: 90%;
  color: white;
  font-size: 3rem;
  margin: 0%;
  font-weight: bold;

  @media (max-width: 1450px) {
    width: 350px;
    font-size: 2.5rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    text-align: center;
    font-size: 2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid gray;
  font-size: 1.5rem;
  color: gray;
  padding: 10px;
  background-color: transparent;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid gray;
  font-size: 1.5rem;
  color: gray;
  padding: 10px;
  background-color: transparent;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

export const Submit = styled.button`
  width: 120px;
  background-color: #6c4ed8;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  opacity: 0.8;
  text-transform: uppercase;
  border-radius: 10px;
  font-family: "Comfortaa", cursive;
  
  &:hover {
    opacity: 1;
    padding: 10px;
    cursor: pointer;
}
  @media (max-width: 1450px) {
    width: 120px;
  }

  @media (max-width: 900px) {
    font-size: 1rem;

  }
`;
