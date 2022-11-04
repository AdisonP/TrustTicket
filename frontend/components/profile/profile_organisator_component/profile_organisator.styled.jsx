import styled from "styled-components";
import { keyframes } from "styled-components";

const popIn = keyframes`
0% { opacity: 0; transform: scale(0.5); }
100% { opacity: 1; transform: scale(1); }
`;

export const Main = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #161618;
`;

export const InformationTopBox = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  gap: 20px;
  border: 1px solid #54d2fd;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 9px 0px #54d2fd;
  box-shadow: 5px 5px 9px 0px #54d2fd;
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

export const Avatar = styled.img`
  width: 30%;
  height: 100px;
  border-radius: 50px;
`;

export const InformationTopField = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InformationTopText = styled.div`
  color: white;
  font-size: 1.2rem;
`;

export const InformationTopTextDark = styled.div`
  color: gray;
  font-size: 1rem;
`;

export const InformationTopTextStatus = styled.div`
  color: #00ff00;
  font-size: 1rem;
`;

export const Title = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-top: 20px;
`;

export const InformationBox = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  margin-top: 30px;
  gap: 20px;
  border: 1px solid #54d2fd;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 9px 0px #54d2fd;
  box-shadow: 5px 5px 9px 0px #54d2fd;
`;

export const InformationField = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5px;
`;

export const InformationInput = styled.input`
  width: 100%;
  height: 5vh;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #54d2fd;
  outline: none;
  background-color: #29292d;
  color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.8rem;
    color: white;
  }
`;

export const InformationLabel = styled.label`
  color: #54d2fd;
  font-size: 1rem;
  margin-top: 20px;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #54d2fd;
  width: 40%;
  height: 5vh;
  color: white;
  border: none;
  border-radius: 10px;
`;

export const DisconnectBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  animation: ${popIn} 0.5s;
`;

export const DisconnectButton = styled.button`
  background-color: #54d2fd;
  width: 20%;
  height: 5vh;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
`;

export const DisconnectText = styled.p`
  color: white;
  font-size: 1.2rem;
`;
