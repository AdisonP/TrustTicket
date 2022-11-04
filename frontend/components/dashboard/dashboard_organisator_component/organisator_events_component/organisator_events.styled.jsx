import styled from 'styled-components'
import { keyframes } from 'styled-components'

const scaleOnHover = keyframes`
100% { transform: scale(1.1); }
`

const FadeIn = keyframes`
0% { opacity: 0;  }
100% { opacity: 1; }
`

export const NewEventButton = styled.button`
  border-radius: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  border: none;
  width: 200px !important;
  background-color: #161618;
  margin-right: 10px;
  position: relative;
  &:hover {
    cursor: pointer;
    background-color: #36363a;
    animation: ${scaleOnHover} 0.5s forwards;
  }
`

export const CreateTicketsButton = styled.button`
  border-radius: 40px;
  color: white;
  font-size: large;
  font-weight: bold;
  left: 50px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  border: none;
  width: 100% !important;
  background-color: #6c4ed8;
  margin-right: 10px;
  position: relative;
  box-shadow: 0 0 5px 0 #2e2d2d81;
  font-family: "Comfortaa", cursive;

  &:hover {
    cursor: pointer;
    background-color: #a68dfa;
    box-shadow: 0 0 5px 0 #2e2d2d81;
    animation: ${scaleOnHover} 0.5s forwards;
  }
`

export const BurnTicketsButton = styled.button`
  border-radius: 40px;
  color: white;
  margin-top: 20%;
  font-size: large;
  font-weight: bold;
  left: 50px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  border: none;
  width: 100% !important;
  background-color: #6c4ed8;
  margin-right: 10px;
  position: relative;
  box-shadow: 0 0 5px 0 #2e2d2d81;
  font-family: "Comfortaa", cursive;

  &:hover {
    cursor: pointer;
    background-color: #a68dfa;
    box-shadow: 0 0 5px 0 #2e2d2d81;
    animation: ${scaleOnHover} 0.5s forwards;
  }
`

export const BurnDiv = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  left: 50px;
  flex-direction: column;
  border-radius: 20px;
  background-color: #2c2b2b75;
  margin-top: 20px;
  padding: 10%;
`

export const SubmitBurn = styled.button`
  margin-top: 10px;
  color: white;
  border-radius: 40px;
  border: none;
  height: 40px;
  background-color: #6c4ed8;
  box-shadow: 0 0 5px 0 #2e2d2d81;
  &:hover {
    cursor: pointer;
    background-color: #a68dfa;
    box-shadow: 0 0 5px 0 #2e2d2d81;
    animation: ${scaleOnHover} 0.5s forwards;
  }
`
export const BurnDivBack = styled.button`
  border: none;
  background-color: #6c4ed8;
  margin-top: 20px;
  width: 50px;
  align-self: center;
  border-radius: 1000px;
  &:hover {
    cursor: pointer;
    background-color: #a68dfa;
    box-shadow: 0 0 5px 0 #2e2d2d81;
    animation: ${scaleOnHover} 0.5s forwards;
  }
`

export const BurnInput = styled.input`
  background-color: #888787;
  color: #ffff;
  border: none;
  margin-top: 10px;
  height: 30px;
  border-radius: 20px;
`

export const GoBackButton = styled.button`
  border-radius: 100%;
  color: white;
  top: 50vh;
  left: 50px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  border: none;
  width: 100px;
  background-color: #6c4ed8;
  position: relative;
  box-shadow: 0 0 5px 0 #2e2d2d81;

  &:hover {
    cursor: pointer;
    background-color: #a68dfa;
    box-shadow: 0 0 5px 0 #2e2d2d81;
    animation: ${scaleOnHover} 0.5s forwards;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export const RowSelectedEvent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: right;
  justify-content: end;
`

export const CloseBtn = styled.div`
  color: white;
  border: 'none';
  margin-right: 20px;
  width: 30px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

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
`

export const transBox = styled.div`
  background-color: #1616185a;
  box-shadow: 0 0 100px 100px #161618 inset;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(15px);
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  font-weight: bold;
`

export const Col = styled.div`
  flex: 1;
`

export const ColumnDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const RowDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap !important;
  margin: 20px;
  height: 50px;
  color: white;
  position: absolute;
`

export const RowDetail2 = styled.div``

export const RowStatDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap !important;
  margin-top: 50px;
  height: 50px;
  color: white;
`

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
`

export const ImgPres = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 20px !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: border-box;
  animation: ${FadeIn} 3s;
`

export const EventsRow = styled.div`
  display: flex;
  width: 90vw;
  height: auto;
  margin: 20;
  flex-direction: row;
  margin-top: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  animation: ${FadeIn} 3s;

  @media (max-width: 500px) {
    justify-content: center;
  }
`

export const Row = styled.div`
  display: flex;
  z-index: 10;
`
