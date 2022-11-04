import styled from "styled-components";
import { keyframes } from "styled-components";

const popIn = keyframes`
0% { opacity: 0; transform: scale(0.5); }
100% { opacity: 1; transform: scale(1); }
`;

export const Main = styled.div`
  font-family: "Comfortaa", cursive;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #161618;

  @media (min-width: 700px) {
    width: 50%;
    margin: auto;
  }
`;

export const BgImg = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 12;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
`;

export const TransBox = styled.div`
  background-color: #1616185a;
  box-shadow: 0 0 100px 100px #161618 inset;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(10px);
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  font-weight: bold;
`;

export const InformationTopBox = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  background: rgba(42, 42, 46, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
`;

export const GoBackButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  margin-left: 20px;
  border-radius: 100%;
  background-color: #7e62e2;
  z-index: 1;
  margin-bottom: 20px;

  &:hover {
    background-color: #3f2c83;
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  width: 100px;
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
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  text-align: center;
`;

export const InformationTopTextDiv = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const InformationTopTextSubDiv = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationTopTextDark = styled.div`
  color: gray;
  font-size: 1rem;
`;

export const InformationTopTextLigth = styled.div`
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
`;

export const Title = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-top: 20px;
`;

export const InformationBox = styled.div`
  width: 100%;
  margin-top: 10px;

  height: auto;
  padding: 10px;
  display: flex;
  top: 0;
  left: 0;
  background-color: #29292d;
  /* margin-top: 30px; */
  gap: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InformationField = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5px;
`;

export const InformationInput = styled.input`
  width: 50%;
  height: 5vh;
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  border: 1px solid #6c4ed8;
  outline: none;
  background-color: #29292d;
  color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Comfortaa", cursive;
    font-size: 0.8rem;
    color: white;
  }
`;

export const InformationLabel = styled.label`
  color: white;
  font-size: 1rem;
  margin-top: 20px;
  margin-left: 5px;
  margin-bottom: 5px;
  width: 50%;
  margin: auto;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const DeleteButton = styled.p`
  color: white;
  background-color: #6c4ed8;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  margin-block-start: 1rem;
  margin-block-end: 0;
`;

export const Button = styled.button`
  background-color: #6c4ed8;
  width: 40%;
  height: 6vh;
  color: white;
  font-weight: bold;
  border: none;
  opacity: 0.8;
  border-radius: 10px;
  font-family: "Comfortaa", cursive;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonQuit = styled.button`
  background-color: #6c4ed8;
  height: 4vh;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
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
  background-color: #6c4ed8;
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

export const InformationCryptoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: rgba(42, 42, 46, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  margin-top: 2px;
`;

export const CryptoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 1px solid white;
  background-image: url("/matic_logo.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CryptoInfoSubDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CryptoInfoLayer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const CryptoInfoTitle = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const CryptoInfoSubTitle = styled.p`
  color: #a69697;
  font-size: 0.8rem;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const TicketInfoMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const TicketInfoLayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #2a2a2e;
  border-radius: 15px;
  margin-top: 10px;
  position: relative;
`;

export const EventIcon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 15px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
`;

export const TicketInfoSubLayer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const TicketInfoText = styled.p`
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem;
  margin-block-end: 0;
  margin-block-start: 0;

  @media (max-width: 350px) {
    font-size: 0.6rem;
  }
`;

export const TicketInfoTextLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-left: calc(100px + 1rem);
`;

export const HistoryTitle = styled.h1`
  color: white;
  width: 100%;
`;

export const UpdateButton = styled.p`
  color: orange;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  margin-block-start: 1rem;
  margin-block-end: 0;
`;
