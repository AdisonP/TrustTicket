import styled from "styled-components";
import { keyframes } from "styled-components";
import * as animations from "../../assets/animations";
const scaleOnHover = keyframes`
100% { transform: scale(1.1); }
`;

const FadeIn = keyframes`
0% { opacity: 0;  }
100% { opacity: 1; }
`;

export const NewEventButton = styled.button`
  border-radius: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  border: "none";
  width: 200px !important;
  background-color: #161618;
  margin-right: 10px;
  position: relative;
  &:hover {
    cursor: pointer;
    background-color: #36363a;
    animation: ${scaleOnHover} 0.5s forwards;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowSelectedEvent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: right;
  justify-content: end;
`;

export const CloseBtn = styled.div`
  color: white;
  border: "none";
  margin-right: 20px;
  width: 30px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const Details = styled.div`
  width: 100%;
  color: white;
  background-color: #000000fd;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const TicketDetailDiv = styled.div`
  z-index: 1;
  background-color: black;
  width: 100%;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

export const Card = styled.div`
  width: 300;
  border: solid #ada1ee 1px;
  border-radius: 30px;
  color: white;
  background-color: #ffffff;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
    opacity: 1;
    animation: ${animations.scaleOnHoverLess} 0.5s forwards;
  }

  @media (max-width: 1300px) {
    margin: 10px;
  }
`;

export const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: hidden;
  margin: 15px;
  color: white;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header1 = styled.h3`
  font-size: 1rem;
  color: #ad8ada;
  margin: 0;
`;

export const BgImg = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  justify-content: center;
  flex: 12;
  max-width: 100%;
  max-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  box-shadow: 0 0 100px 100px #161618 inset;

  @media (max-width: 1050px) {
  }
`;

export const transBox = styled.div`
  background-color: #1616185a;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(15px);
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  font-weight: bold;
`;

export const Col = styled.div`
  flex: 1;
`;

export const ColumnDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap !important;
  margin: 20px;
  height: 50px;
  color: white;
  position: relative;
`;

export const RowStatDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap !important;
  margin-top: 50px;
  height: 50px;
  color: white;
  position: relative;
`;

export const CardStatDetail = styled.div`
  flex: 1;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border-width: 50px;
  background: rgba(0, 0, 0, 0.5);
  margin-right: 20px;
  border: solid;
  border-radius: 40px;
  border-color: #e2d3d3;

  @media (max-width: 1300px) {
    height: 175px;
    width: 175px;
  }

  @media (max-width: 1050px) {
    height: 150px;
    width: 150px;
  }
`;

export const ImgPres = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  animation: ${FadeIn} 3s;
`;

export const EventsRow = styled.div`
  display: flex;
  width: 90vw;
  height: auto;
  margin: 20;
  flex-direction: row;
  margin-top: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  animation: ${FadeIn} 3s;
`;

export const Row = styled.div`
  display: flex;
  z-index: 10;
`;
