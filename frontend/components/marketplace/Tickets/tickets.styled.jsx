import styled from "styled-components";
import { keyframes } from "styled-components";

const scaleOnHover = keyframes`
100% { transform: scale(1.07); }
`;
const downscaleOnHover = keyframes`
100% { transform: scale(1); }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161618;
  padding: 20px;
`;

export const GoBackButton = styled.button`
  width: 45px;
  height: 45px;
  border: none;
  margin-top: 20px;
  border-radius: 100%;
  background-color: #6c4ed8;
  z-index: 1;
  &:hover {
    background-color: #3278AA;
    cursor: pointer;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NftContainer = styled.div`
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  width: 275px;
  &:hover{
  animation: ${scaleOnHover} 0.7s forwards
}
`;

export const NftContainer2 = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(20px);
`;

export const NftTitle = styled.div`
  margin-bottom: 10px;
`;

export const NftDescription = styled.div`
  font-size: 0.9rem;
`;

export const NftBtn = styled.button`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Chakra Petch", sans-serif;
  padding: 10px;
  background-color: #3f2c83;
  border: none;
  border-radius: 0 0 40px 40px;
  opacity: 0.9;
  &:hover {
    opacity: 1;

    cursor: pointer;
  }
`;

export const MainTicketContainer = styled.div`
  color: white;
  width: 90%;
  font-family: "Comfortaa", cursive;
`;

export const TicketDetailsMainBox = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 10px;

  @media (min-width: 450px) {
    width: 90%;
    justify-content: center;
    gap: 50px;
  }
  @media (min-width: 768px) {
    width: 70%;
    justify-content: center;
    
  }
  @media (min-width: 1024px) {
    width: 60%;
    justify-content: center;
    
  }
  @media (min-width: 1280px) {
    width: 50%;
    justify-content: center;
    
  }
  @media (min-width: 1600px) {
    width: 40%;
    justify-content: center;
    gap: 50px;
  }
`;

export const TicketDetailsLittleBox = styled.div`
  display: flex;
  flex-direction: column;

`;

export const TicketDetailsText = styled.p`
  font-size: 0.8rem;
  color: #6c4ed8;
  font-weight: bold;
  font-family: "Monstserrat", sans-serif;
  margin: 0;
  padding: 0;
`;
export const PriceButton = styled.button`
  width: 40%;
  height: auto;
  position: fixed;
  background-color: #3f2c83;
  border: none;
  border-radius: 20px;
  z-index: 9999;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Chakra Petch", sans-serif;
  padding: 10px;
  cursor: pointer;
  bottom: 2%;

  @media (min-width: 450px) {
    width: 30%;
  }
  @media (min-width: 768px) {
    width: 20%;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
  @media (min-width: 1280px) {
    width: 10%;
  }
  @media (min-width: 1600px) {
    width: 10%;
  }
`;

export const PriceButton2 = styled.button`
  width: 40%;
  height: auto;
  background-color: #3f2c83;
  border: none;
  border-radius: 20px;
  z-index: 9999;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Chakra Petch", sans-serif;
  padding: 10px;
  cursor: pointer;
  bottom: 2%;

  @media (min-width: 450px) {
    width: 30%;
  }
  @media (min-width: 768px) {
    width: 20%;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
  @media (min-width: 1280px) {
    width: 10%;
  }
  @media (min-width: 1600px) {
    width: 10%;
  }
`;

export const DescriptionBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  background-color: #161618;
  gap: 10px;

  @media (min-width: 450px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 40%;
  }
  @media (min-width: 1600px) {
    width: 40%;
  }
`;

export const DescriptionTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
  font-family: "Comfortaa", cursive;
`;

export const DescriptionText = styled.p`
  font-size: 0.8rem;
  color: white;
  margin: 0;
  padding: 0;
  font-family: "Comfortaa", cursive;
`;
